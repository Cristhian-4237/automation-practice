import FormFieldsPage from '../pages/formFieldsPage';

describe('Practice Automation - Form Fields', () => {
  const formPage = new FormFieldsPage();

  beforeEach(() => {
    formPage.visit();
  });

  it('should fill the form controls with valid values', () => {
    // Arrange
    const name = 'Cypress QA';
    const password = 'SecurePassword123';
    const email = 'qa@example.com';
    const message = 'Automation test message';

    // Act
    formPage
      .typeName(name)
      .typePassword(password)
      .checkDrink('Water')
      .checkDrink('Coffee')
      .chooseColor('Blue')
      .selectAnswer('yes')
      .typeEmail(email)
      .typeMessage(message);

    // Assert
    cy.get('#name-input').should('have.value', name);
    cy.get('input[type="password"]').should('have.value', password);
    cy.get('#email').should('have.value', email);
    cy.get('#message').should('have.value', message);
    cy.get('input[data-testid="drink1"]').should('be.checked');
    cy.get('input[data-testid="drink3"]').should('be.checked');
    cy.get('input[id="color2"]').should('be.checked');
    cy.get('select#automation').should('have.value', 'yes');
  });

  it('should allow selecting different form options and preserve the selected state', () => {
    // Arrange
    const selectedDrink = 'Milk';
    const selectedColor = 'Green';
    const selectedOption = 'Undecided';

    // Act
    formPage.checkDrink(selectedDrink).chooseColor(selectedColor).selectAnswer(selectedOption);

    // Assert
    cy.get('input[data-testid="drink2"]').should('be.checked');
    cy.get('input[id="color4"]').should('be.checked');
    cy.get('select#automation').should('have.value', selectedOption.toLowerCase());
  });

  it('should validate that the main inputs are visible and editable', () => {
    // Arrange
    const name = 'Visible input test';

    // Act
    formPage.typeName(name);

    // Assert
    cy.get('#name-input').should('be.visible').and('have.value', name);
    cy.get('input[type="password"]').should('be.visible');
    cy.get('#email').should('be.visible');
    cy.get('#message').should('be.visible');
  });
});
