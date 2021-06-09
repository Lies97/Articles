const goToPost = (getAlias, selector) => {
  cy.wait(`${getAlias}`).its('response.statusCode').should('eq', 200);
  cy.wait(2000);
  cy.get(`${selector}`).click();
  cy.wait(`${getAlias}`).its('response.statusCode').should('eq', 200);
  cy.wait(2000);
  expect(cy.url().should('include', '/article?url='));
  cy.get('.go-back > i').click();
  expect(cy.url().should('include', '/articles?p='));
};

const hostName = 'https://articles-angular-app.herokuapp.com';
const apiUrl = 'https://iwa-test.herokuapp.com/graphql';

describe('Articles', () => {
  before(() => {
    cy.visit(hostName);
  });

  it('should renders Article list', () => {
    cy.location('pathname').should('includes', 'articles');
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

  it('should go next or previous page when we click the same type button at pagination', () => {
    cy.window().then((win) => {
      cy.intercept(apiUrl).as('getArticles');
      const nextButton = cy.get('.ngx-pagination > .pagination-next');
      const urlString = win.location.href;
      const lastCharacter = urlString.charAt(urlString.length - 1);
      let pageNumber = parseInt(lastCharacter);
      nextButton.click();
      cy.wait(`@getArticles`).its('response.statusCode').should('eq', 200);
      cy.wait(2000);
      ++pageNumber;
      expect(cy.url().should('include', `/articles?p=${pageNumber}`));

      const prevButton = cy.get('.ngx-pagination > .pagination-previous');
      prevButton.click();
      cy.wait(`@getArticles`).its('response.statusCode').should('eq', 200);
      cy.wait(2000);
      --pageNumber;
      expect(cy.url().should('include', `/articles?p=${pageNumber}`));
    });
  });

  it('should go the correct page number that we want to be in', () => {
    cy.intercept(apiUrl).as('getArticles');
    const forthIndex = cy.get('.ngx-pagination > li:nth-child(6)'); // 0 for previous button, last for next button
    forthIndex.click();

    cy.wait(`@getArticles`).its('response.statusCode').should('eq', 200);
    cy.wait(2000);
    const pageNumber = 4;
    expect(cy.url().should('include', `/articles?p=${pageNumber}`));
  });

  it('should redirect to article when clicking go to post or clicking on image on most viewed zone', () => {
    cy.intercept(apiUrl).as('getArticles');
    goToPost('@getArticles', '.most-view-articles > .card:first');
    goToPost('@getArticles', '.go-to-post-wrapper:first');
  });
});
