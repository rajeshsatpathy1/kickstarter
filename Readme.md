# Project: Kickstarter

This project combines all the learnings from the other projects in the main repo [Ethereum Tutorials](https://github.com/rajeshsatpathy1/Ethereum_Tutorials). The aim is to build a platform to support kickstarter campaigns that can perform trustlessly.
A simple design representation for the proposed kickstarter contract interaction can be seen below.

![kickstarter_project_design drawio](https://github.com/rajeshsatpathy1/kickstarter/assets/21288436/25205059-b1d0-40fd-b352-3b5603352451)


## Contract Design

### Campaign

The Campaign contract is the main contract that houses all the main logic for the kickstarter project.

<table>
  <th colspan=3>Variables</th>
  <tr>
    <td><b>manager</b></td>
    <td>address</td>
    <td>address of the person who is managing this campaign</td>
  </tr>
  <tr>
    <td><b>minimumContribution</b></td>
    <td>uint</td>
    <td>Minimum donation required to be considered a contributer or approver</td>
  </tr>
  <tr>
    <td><b>approvers</b></td>
    <td>mapping</td>
    <td>Mapping of addresses for every person who has donated money</td>
  </tr>
  <tr>
    <td><b>requests</b></td>
    <td>Request[]</td>
    <td>List of Requests* that the manager created</td>
  </tr>
</table>

<table>
  <th colspan=2>Functions</th>
  <tr>
    <td><b>Campaign</b></td>
    <td>Constructor function that sets the minimum contribution and the owner of the campaign contract</td>
  </tr>
  <tr>
    <td><b>contribute</b></td>
    <td>Called when someone wants to donate money to the campaign and become an approver</td>
  </tr>
  <tr>
    <td><b>createRequest</b></td>
    <td>Called by a manager to create a new spending request</td>
  </tr>
  <tr>
    <td><b>approveRequest</b></td>
    <td>Called by each contributor to approve a spending request</td>
  </tr>
  <tr>
    <td><b>finalizeRequest</b></td>
    <td>After a request has got enough approvals, the manager can call this to get money sent to the vendor for making the 'spending request' purchase.</td>
  </tr>
</table>

#### Request:
Each request needs to have a set of info that describes its purpose and state. A struct is used to do this and it looks something like below.

<table>
  <th colspan=3>Request struct</th>
  <tr>
    <td>description</td>
    <td>string</td>
    <td>Describes why the request is being created</td>
  </tr>
  <tr>
    <td>value</td>
    <td>uint</td>
    <td>Amount of money that manager wants to send to vendor</td>
  </tr>
  <tr>
    <td>recipient</td>
    <td>address</td>
    <td>Address the money will be sent to (the vendor)</td>
  </tr>
  <tr>
    <td>complete</td>
    <td>bool</td>
    <td>True if the request has already been processed</td>
  </tr>
  <tr>
    <td>approvals</td>
    <td>Mapping</td>
    <td>Mapping of addresses that have approved</td>
  </tr>
  <tr>
    <td>approvalsCount</td>
    <td>uint</td>
    <td>Track number of approvals i.e. who has voted</td>
  </tr>
</table>

### Campaign Factory

When user tries to interact with the contract through a webapp, it gets the contract source code. Having direct calls to the campaign contract can raise vulnerability issues. Eg: The user gets the contract source code, modifies contract, removes the security checks and deploys the fraudulent contract.

![image](https://github.com/rajeshsatpathy1/kickstarter/assets/21288436/9b278cd7-8ed1-4010-9b46-bc1cdf184cd8)


A solution to this is using a factory design pattern. This adds a level of abstraction that removes the source code mainipulation bug.

![image](https://github.com/rajeshsatpathy1/kickstarter/assets/21288436/968889dd-f486-4de4-ab32-4245c625839f)


<table>
  <th colspan=3>Variables</th>
  <tr>
    <td><b>deployedCampaigns</b></td>
    <td>address[]</td>
    <td>address of all deployed campaigns</td>
  </tr>
</table>

<table>
  <th colspan=2>Functions</th>
  <tr>
    <td><b>createCampaign</b></td>
    <td>Deploys a new instance of a Campaign and stores the resulting address</td>
  </tr>
  <tr>
    <td><b>getDeployedCampaigns</b></td>
    <td>Returns a list of all deployed campaignss</td>
  </tr>
</table>

### Contract App Design

![contract_app_desgn drawio](https://github.com/rajeshsatpathy1/kickstarter/assets/21288436/043327a9-f7e3-4acf-a098-de876688bb0c)

## Web App development

Keeping the above contracts as the base, the webapp is built using Next.js framework.

### Why Next.js for this project?

One of the main reasons to use Next.js is that it provides server side rendering. This means initial calls can be made to the Ethereum network, like data fetching or listing items in the smart contract, on the server.
This is beneficial as it ensures users to see some information on the screen, regardless of whether their browsers are using MetaMask or have access to an Ethereum network.

Other things Next.js provides include - hot module reloading, multi-page development framework, wraps up react and other useful tools in one package.

![eth_next_server drawio](https://github.com/rajeshsatpathy1/kickstarter/assets/21288436/df75bf51-dd74-4cf4-8867-62cdde684a29)










Things to add:
- Steps to start the project
