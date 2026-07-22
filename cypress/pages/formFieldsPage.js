class FormFieldsPage {
  constructor() {
    this.url = '/form-fields/';
  }

  visit() {
    cy.visit(this.url);

    cy.get('body').then(($body) => {
      if ($body.find('button[aria-label="Close"]').length > 0) {
        cy.wrap($body)
          .find('button[aria-label="Close"]')
          .first()
          .click({ force: true });
      }
    });

    cy.get('body').then(($body) => {
      if ($body.find('#pum-674').length > 0) {
        cy.wrap($body).find('#pum-674').invoke('css', 'display', 'none');
      }
    });

    return this;
  }

  assertPageTitle(expectedTitle) {
    cy.title().should('eq', expectedTitle);
    return this;
  }

  assertPageContent() {
    cy.get('h1').should('contain.text', 'Form Fields');
    cy.contains('p', 'Filling out a web form is one of the most fundamental things to learn as you begin your automation journey.');
    return this;
  }

  typeName(name) {
    cy.get('#name-input').clear().type(name, { force: true });
    return this;
  }

  typePassword(password) {
    cy.get('input[type="password"]').clear().type(password, { force: true });
    return this;
  }

  checkDrink(drinkName) {
    const drinkInput = {
      Water: 'input[data-testid="drink1"]',
      Milk: 'input[data-testid="drink2"]',
      Coffee: 'input[data-testid="drink3"]',
      Wine: 'input[data-testid="drink4"]',
    };

    cy.get(drinkInput[drinkName]).check({ force: true });
    return this;
  }

  chooseColor(colorName) {
    const colorInput = {
      Red: 'input[id="color1"]',
      Blue: 'input[id="color2"]',
      Yellow: 'input[id="color3"]',
      Green: 'input[id="color4"]',
    };

    cy.get(colorInput[colorName]).check({ force: true });
    return this;
  }

  selectAnswer(option) {
    cy.get('select#automation').select(option);
    return this;
  }

  typeEmail(email) {
    cy.get('#email').clear().type(email, { force: true });
    return this;
  }

  typeMessage(message) {
    cy.get('#message').clear().type(message, { force: true });
    return this;
  }

  submit() {
    cy.get('#submit-btn').click();
    return this;
  }
}

export default FormFieldsPage;
