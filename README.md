# Apprenticeship service Frontend

DAS Frontend contains the code you need to start building user interfaces for Apprenticeship service government services.

See live examples of DAS Frontend components, and guidance on when to use them in your service, in the [DAS Design System](https://moj-design-system.herokuapp.com/).

## Contact the team

DAS Frontend is maintained by the DAS Design System team. If you need support email the [Design System team](mailto:design-system@digital.justice.gov.uk).

## Quick start

We recommend [installing DAS Frontend using node package manager (npm)](docs/installation/installing-with-npm.md).

Once installed, you will be able to use the code from the examples in the [DAS Design System](https://moj-design-system.herokuapp.com/) in your service.

## Browser support

DAS Frontend will allow you to build services that comply with the [guidance in the Service Manual][service-manual-browsers].

If you are including DAS Frontend as part of a stylesheet that you are generating in your application's build pipeline, you will need to [generate and
include a separate stylesheet in order to support Internet Explorer 8](docs/installation/supporting-internet-explorer-8.md).

[service-manual-browsers]: https://www.gov.uk/service-manual/technology/designing-for-different-browsers-and-devices#browsers-to-test-in

## Assistive technology support

DAS Frontend will allow you to build services that comply with the [guidance in the Service Manual][service-manual-assistive-technologies].

In addition, we test that all content is accessible with keyboard only.

We aim to support [users who adjust or override the colours of websites they visit][how-users-change-colours-on-websites]. We test this by [changing colours in Firefox][changing-colours-in-firefox], by [enabling 'High Contrast' mode in Windows][enabling-high-contrast-mode-in-windows] and by using the [High Contrast plugin for Chrome][high-contrast-plugin-for-chrome].

[service-manual-assistive-technologies]: https://www.gov.uk/service-manual/technology/testing-with-assistive-technologies#what-to-test

[changing-colours-in-firefox]:
https://support.mozilla.org/en-US/kb/change-fonts-and-colors-websites-use

[enabling-high-contrast-mode-in-windows]:
https://support.microsoft.com/en-gb/help/13862/windows-use-high-contrast-mode

[high-contrast-plugin-for-chrome]: https://chrome.google.com/webstore/detail/high-contrast/djcfdncoelnlbldjfhinnjlhdjlikmph?hl=en-US

[how-users-change-colours-on-websites]:
https://accessibility.blog.gov.uk/2017/03/27/how-users-change-colours-on-websites/

## Contribution guidelines

If you want to help us build DAS Frontend, view our [contribution guidelines](CONTRIBUTING.md).

### Further reading

- [Component principles](https://github.com/alphagov/govuk_publishing_components/blob/master/docs/component_principles.md)
- [Component conventions](https://github.com/alphagov/govuk_publishing_components/blob/master/docs/component_conventions.md)