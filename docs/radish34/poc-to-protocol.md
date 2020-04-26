---
description: Describe how we are going to move from the demo code to the protocol code
---

# From POC to Protocol

## Abstraction

Even if Radish34 were the only application we wanted to build, the code still requires abstraction. For example, the components that provide the MSA step in the Radish34 Workflow is named MSA and tailored specifically to that Workflow Step. Even without a generalized protocol, this reusable package should be defined one abstraction up as "Step" and then instantiated for each instance: RFP, Bid, MSA, PO, Shipment, Invoice, etc.

Much of the work ahead for the community involves abstraction.

## Generalization

It's one thing to take a POC like Radish34 and add good abstractions and other modern design patterns to make it a system worthy of production use. But that's not what the Baseline Protocol community is all about. The real objective is to both abstract and generalize the work to fill in the Baseline folder in the repo with reusable [components](../baseline-protocol/components.md) and tools that can be used to quickly turn any system for a range of purposes into a _baselined_ system.  

This is the work ahead for the community.

