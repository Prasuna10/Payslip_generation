# Payslip_generation

A simple backend application built using NodeJs and ExpressJS for creating a tabular table containing the salary and taxations of the Employee for the given month and year.

## Steps to run -
Access the application using Postman:

Open Postman Desktop Agent

1.cd Employee_pay_slip_generation

2.npm install

3. Install the body-parser and express (`npm install express body-parser`).
   
4. Run the project using node index.js ornode server.js
   
5. Open `localhost:2000/` using Postman.You can use any route (e.g., GET or POST) to interact with the application.
   
6. To generate the salary slip, go to `localhost:2000/payslip` using the POST route in Postman. Ensure that you pass all the required key value pairs in the body section of the Postman(Accessed through the raw JSON method in the body section in pictures).

Set URL and Method

Select Body and Raw JSON

Enter JSON Data

Send Request and View Response

Generate the salary slip.

Entry Point - index.js

    Index.js calls the the user defined routes located in /route/slip_generation.js for initializing the routes.

        /route/slip_generation uses all the functionality defined in the /controllers/payslip.js
        
            /controllers/payslip.js has all the information of the middleware and the end point method defined in the 
            middleware and slip_gen classes(Uses /payslipcalculation/slip_generation.js for further calling methods).
            
                /payslipcalculation/slip_generation.js will be generating all the inputs required for the payslip generation
                and has a checkinputs and generate method for the last level verification of inputs defined under 
                /utils/slip_generation_utils.js file and the taxation table for income tax calculation inside 
                the /config/tax_table.js as an array of JSON object

Directory Structure:

![structure](https://github.com/Prasuna10/Payslip_generation/assets/96649154/d9e6456e-1f96-45d7-8024-a0b5ffb88456)

Outputs in Postman Agent:

![Generate_slip2](https://github.com/Prasuna10/Payslip_generation/assets/96649154/9eb2b3e7-29a1-4bbb-90fc-6611804e545a)

![Generate_slip3](https://github.com/Prasuna10/Payslip_generation/assets/96649154/96e241f6-2a66-44b0-8c96-d70abbd7350e)

![ot](https://github.com/Prasuna10/Payslip_generation/assets/96649154/ad113ec8-f72f-4609-89b1-6e241cf39dbf)

     

