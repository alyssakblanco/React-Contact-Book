import { mount } from '@cypress/react';
import App from '../../src/App';
import Home from '../../src/Home';
import AddNew from '../../src/AddNew';
import Edit from '../../src/Edit';
import { useState } from 'react';

const contacts = [
        {
            id: 1,
            fName:"Alyssa",
            lName:"Blanco",
            num:"(813)480-2369",
            email:"alyssakblanco@outlook.com"
        },
        {
            id: 2,
            fName:"Peter",
            lName:"Parker",
            num:"(555)123-9876",
            email:"notspiderman@outlook.com"
        },
        {
            id: 3,
            fName:"Elon",
            lName:"Musk",
            num:"(555)321-6789",
            email:"rocketman@outlook.com"
        }
    ] 


it('loads page components', () => {

    cy.get(<Home/>);
    cy.get(<AddNew/>);
    cy.get(<Edit/>);

});

it('loads array', () => {

    cy.visit('/VISA_ContactList/')

    cy.get('contacts li').should('have.length', 4)

});




// it('loads home', () => {

//     mount(<Home contacts={[
//         {
//             id: 1,
//             fName:"Alyssa",
//             lName:"Blanco",
//             num:"(813)480-2369",
//             email:"alyssakblanco@outlook.com"
//         },
//         {
//             id: 2,
//             fName:"Peter",
//             lName:"Parker",
//             num:"(555)123-9876",
//             email:"notspiderman@outlook.com"
//         },
//         {
//             id: 3,
//             fName:"Elon",
//             lName:"Musk",
//             num:"(555)321-6789",
//             email:"rocketman@outlook.com"
//         }
//     ]}/>);

// });



// it('has correct home path', () => {
//     cy.location(<Home/>).should((loc) => {
//         expect(loc.href).to.eq('http://localhost:3000/VISA_ContactList/')
//         //http://localhost:52358/__cypress/iframes/C:/Users/alybl/projects/visa-contact-list/cypress/component/todo.spec.js
//     })
// });


// function contactList(){
//     const [contacts, setContacts] = useState(
//         [
//             {
//                 id: 1,
//                 fName:"Alyssa",
//                 lName:"Blanco",
//                 num:"(813)480-2369",
//                 email:"alyssakblanco@outlook.com"
//             },
//             {
//                 id: 2,
//                 fName:"Peter",
//                 lName:"Parker",
//                 num:"(555)123-9876",
//                 email:"notspiderman@outlook.com"
//             },
//             {
//                 id: 3,
//                 fName:"Elon",
//                 lName:"Musk",
//                 num:"(555)321-6789",
//                 email:"rocketman@outlook.com"
//             }
//         ] 
//       )
// }

// describe('My First Test', () => {
    
    
//     it('Does not do much!', () => {
//         cy.get(<Home {...contactList} contacts={[
//             {
//                 id: 1,
//                 fName:"Alyssa",
//                 lName:"Blanco",
//                 num:"(813)480-2369",
//                 email:"alyssakblanco@outlook.com"
//             },
//             {
//                 id: 2,
//                 fName:"Peter",
//                 lName:"Parker",
//                 num:"(555)123-9876",
//                 email:"notspiderman@outlook.com"
//             },
//             {
//                 id: 3,
//                 fName:"Elon",
//                 lName:"Musk",
//                 num:"(555)321-6789",
//                 email:"rocketman@outlook.com"
//             }
//         ] } setContacts={[
//             {
//                 id: 1,
//                 fName:"Alyssa",
//                 lName:"Blanco",
//                 num:"(813)480-2369",
//                 email:"alyssakblanco@outlook.com"
//             },
//             {
//                 id: 2,
//                 fName:"Peter",
//                 lName:"Parker",
//                 num:"(555)123-9876",
//                 email:"notspiderman@outlook.com"
//             },
//             {
//                 id: 3,
//                 fName:"Elon",
//                 lName:"Musk",
//                 num:"(555)321-6789",
//                 email:"rocketman@outlook.com"
//             }
//         ] }/>);
//     })
// })


// it('is able to load page', () => {
//         mount(<Home {...props} contacts={contacts} setContacts={setContacts}/>);
// });


// it('is able to load page', () => {

//     mount(<Home/>);

//     cy.get('#modal').should('exist');

// });

// it('has element', () => {

//     mount(<Home/>);

//     cy.get('#h1').should('contain.text', 'Contact Book');

// });

// describe('My First Test', () => {
//     it('Does not do much!', () => {
//         mount(<Home {...props} contacts={contacts} setContacts={setContacts} />);
//       expect(true).to.equal(true)
//     })
// })


// describe('My First Test', () => {
//     it('finds the content "type"', () => {
//         cy.contains('h1')
//     })
//   })
  
// describe('My First Test', () => {
//     const contacts =
//         [
//             {
//                 id: 1,
//                 fName:"Alyssa",
//                 lName:"Blanco",
//                 num:"(813)480-2369",
//                 email:"alyssakblanco@outlook.com"
//             },
//             {
//                 id: 2,
//                 fName:"Peter",
//                 lName:"Parker",
//                 num:"(555)123-9876",
//                 email:"notspiderman@outlook.com"
//             },
//             {
//                 id: 3,
//                 fName:"Elon",
//                 lName:"Musk",
//                 num:"(555)321-6789",
//                 email:"rocketman@outlook.com"
//             }
//         ] 
//     ;

//     it('loads', () => {
//         mount(<Home contacts={contacts}/>)
//     })
// })