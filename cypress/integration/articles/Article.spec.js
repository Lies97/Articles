const hostName = 'https://articles-angular-app.herokuapp.com';
const apiUrl = 'https://iwa-test.herokuapp.com/graphql';

describe('Article', () => {
  before(() => {
    cy.visit(hostName);
  });

  it('should renders Article list', () => {
    cy.location('pathname').should('include', 'articles');
  });

  it('should redirect to Article detail', () => {
    cy.intercept(apiUrl).as('getArticles');
    cy.wait(`@getArticles`).its('response.statusCode').should('eq', 200);
    cy.wait(2000);
    cy.get(`.most-view-articles > .card:first`).click();
  });

  it('should hide the back to top button when the page on top', () => {
    cy.scrollTo(0, 0);

    cy.get('#back-to-top').should('have.class', 'o-0');
  });

  it('should display back to top button when the page is scrolled', () => {
    cy.scrollTo(0, 100);

    cy.get('#back-to-top').not('.o-0');
  });

  it('should be on top when click the back to top button', () => {
    cy.get('#back-to-top').click();

    expect(cy.window().specWindow.pageYOffset === 0);
  });

  it('should redirect to page you are in before go to post', () => {
    cy.window().specWindow.history.go(-2);
  });
});
