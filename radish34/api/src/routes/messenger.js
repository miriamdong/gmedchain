import express from 'express';
import {
  partnerCreateRFP,
  deliveryReceiptUpdate,
} from '../db/models/modules/rfps';
import { saveProposal } from '../db/models/modules/proposals';
import { onReceiptMSABuyer, onReceiptMSASupplier } from '../services/msa';
import { onReceiptPOSupplier } from '../services/po';

const router = express.Router();

router.post('/documents', async (req, res) => {
  const messageObj = req.body;
  const { type, deliveredType, senderId, _id } = messageObj;
  let docId;
  console.log(`\n\n\nReceived new document of type ${type}. Parsing now...`);
  switch (type) {
    case 'rfp_create': // inbound RFP from partner
      try {
        docId = (await partnerCreateRFP(messageObj))._id;
      } catch (error) {
        res.status(400);
        res.send({ message: 'Could not create new RFP. Required fields: uuid' });
        return;
      }
      break;
    case 'delivery_receipt':
      // ex: supplier's messenger automatically sends this message type after receiving buyer's RFP
      // Todo: need to enhance to handle each document types, now deliveryReceiptUpdate() only handles RFP
      if (deliveredType === 'rfp_create') {
        docId = (await deliveryReceiptUpdate(messageObj))._id;
      }
      if (deliveredType === 'po_create') {
        docId = (await deliveryReceiptUpdate(messageObj))._id;
      }
      break;
    case 'proposal_create':
      try {
        docId = (await saveProposal(messageObj))._id;
      } catch (error) {
        res.status(400);
        res.send({ message: error });
      }
      break;
    case 'msa_create':
      try {
        console.log('\n\n\nReceived MSA\n');
        console.dir(messageObj, { depth: null });
        onReceiptMSASupplier(messageObj, senderId);
        docId = _id;
      } catch (error) {
        res.status(400);
        res.send({ message: error });
      }
      break;
    case 'signed_msa':
      try {
        console.log('\n\n\nReceived Signed MSA\n');
        console.dir(messageObj, { depth: null });
        onReceiptMSABuyer(messageObj, senderId);
        docId = _id;
      } catch (error) {
        res.status(400);
        res.send({ message: error });
      }
      break;
    // TODO: NEED THE SUPPLIER TO BE ABLE TO:
    //   -  Update the MSA with the Buyer's signature details
    //   -  Update the MSA with a new commitment index (in the merkle tree)
    //   - NOTE: the case of updating an MSA with a new commitment is handled within the po_create and invoice_create responder functions.
    // case 'msa_update_buyer_signature'
    // case 'msa_update_commitment_index'
    // TODO: figure out how to amalgamate the above two updates into one.
    // case 'msa_update':
    // docId = await msaUtils.updateMSA(messageObj);
    // break;
    case 'po_create':
      try {
        console.log('\n\n\nReceived PO\n');
        console.dir(messageObj, { depth: null });
        onReceiptPOSupplier(messageObj, senderId);
      } catch (error) {
        res.status(400);
        res.send({ message: error });
      }
      break;
    // case 'po_update':
    // docId = await poUtils.updatePOById(messageObj);
    // break;
    // case 'invoice_create':
    // docId = await invoiceUtils.createInvoice(messageObj);
    // break;
    // case 'invoice_update':
    // docId = await invoiceUtils.updateInvoice(messageObj);
    // break;
    default:
      console.log('Did not recognize message object type:', messageObj);
  }
  res.status(200);
  res.send({ message: `Document (ID: ${docId}) added or updated in radish-api` });
});

export default router;
