import React, { useEffect, useState, useContext, Fragment } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { useParams } from 'react-router-dom';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import moment from 'moment';
import find from 'lodash/find';
import { ServerSettingsContext } from '../contexts/server-settings-context';
import { MSAContext } from '../contexts/msa-context';
import { GET_RFP_PROPOSAL_MSA } from '../graphql/rfp';
import { GET_PARTNER_BY_IDENTITY } from '../graphql/partners';
import RadishLogo from '../components/RadishLogo';
import RFPSuppliersTable from '../components/RFPSuppliersTable';
import ProposalForm from '../components/ProposalForm';
import RateTable from '../components/RateTable';
import SKUTable from '../components/SKUTable';
import SingleProduct from '../components/SingleProduct';
import { Grid, Tab, Tabs } from '@material-ui/core'

import image1 from '../images/products/p2.jpg'



const RFPDetail = () => {
  const [isSender, setIsSender] = useState(false);
  const [open, setOpen] = useState({});
  const [recipientProposals, setRecipientProposals] = useState([]);
  const { id } = useParams();
  const { postMSA } = useContext(MSAContext);
  const { settings } = useContext(ServerSettingsContext);
  const { organizationAddress } = settings ? settings : {};
  const { loading, data, refetch } = useQuery(GET_RFP_PROPOSAL_MSA, {
    variables: {
      uuid: id,
    },
  });
  const [getPartnerByMessengerKey, { loading: partnerLoading, data: partnerData }] = useLazyQuery(
    GET_PARTNER_BY_IDENTITY,
  );

  const { rfp, getProposalsByRFPId: proposals, msasByRFPId: msas } = data || {};

  useEffect(() => {
    if (rfp && msas && proposals) {
      const rps = rfp.recipients.map(recipient => {
        const recipientProposal = find(
          proposals,
          proposal => proposal.sender === recipient.partner.identity,
        ) || {};
        const msa = find(msas, msa => msa.whisperPublicKeySupplier === recipientProposal.sender) || {};
        return { ...recipient, ...recipientProposal, msaId: msa._id };
      });
      setRecipientProposals(rps);
    };
  }, [rfp, proposals, msas]);

  const createContract = async (index, proposal) => {
    const { rates } = proposal;
    const tierBounds = [];
    const pricesByTier = [];
    rates.forEach((rate, index) => {
      if (index === 0) {
        tierBounds.push(rate.startRange);
        tierBounds.push(rate.endRange);
      } else {
        tierBounds.push(rate.endRange);
      };
      pricesByTier.push(rate.price);
    });
    const msaInput = {
      supplierAddress: proposal.partner.address,
      tierBounds,
      pricesByTier,
      sku: rfp.sku,
      erc20ContractAddress: proposal.erc20ContractAddress,
      rfpId: id,
    }

    await postMSA({
      variables: {
        input: {
          ...msaInput
        },
      },
    });
    setOpen({ [index]: false });
    refetch();
  };

  useEffect(() => {
    if (data && data.rfp) {
      getPartnerByMessengerKey({ variables: { identity: data.rfp.sender } });
    }
  }, [getPartnerByMessengerKey, data]);

  useEffect(() => {
    if (organizationAddress && partnerData) {
      partnerData.getPartnerByMessengerKey.address === organizationAddress && setIsSender(true);
    };
  }, [organizationAddress, partnerData]);

  if (loading || partnerLoading) return <RadishLogo loader />;

  if (!data || !data.rfp) return <h1>Not Found</h1>;
  
  const product = 
    {
        name: data.rfp.sku,
        badge: 'trending',
        rating: 4.2,
        image: image1,
        author: data.rfp.skuDescription,
        price: '$3.00',
        review: '05',
        id: 1
    };

  window.localStorage.setItem('product', product);
  const detail = true;
  return (

    <Container>
        <Grid container spacing={4} className="container">
          <Grid key={1} item lg={4} sm={6} xs={12}>
            <SingleProduct
                id={product.id}
                badge={product.badge}
                name={product.name}
                rating={product.rating}
                image={product.image}
                author={product.author}
                review={product.review}
                price={product.price}
                detail={detail}
            />
          </Grid>
          <Grid key={1} item lg={8} sm={6} xs={12}>
            <Typography variant="h4">{data.rfp.description}</Typography>
            {!isSender && partnerData && (
              <Typography variant="body1">
                for {partnerData.getPartnerByMessengerKey.name} 
              </Typography>
            )}
            <Typography>
              Proposal Deadline: {moment(data.rfp.proposalDeadline * 1000).format('LL')}
            </Typography>

            {isSender && (
              <RFPSuppliersTable
                rfp={rfp}
                proposals={recipientProposals}
                setOpen={setOpen}
                open={open}
                createContract={createContract}
              />
            )}
            {!isSender && data && !data.getProposalsByRFPId.length && <ProposalForm rfp={data.rfp} />}
            {!isSender && data && data.getProposalsByRFPId.length > 0 && (
              <RateTable rates={data.getProposalsByRFPId[0].rates} erc20ContractAddress={data.getProposalsByRFPId[0].erc20ContractAddress} />
            )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default RFPDetail;