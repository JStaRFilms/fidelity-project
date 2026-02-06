# Content Plan for Fidelity Project

This project has been migrated to Next.js. The structure now supports a dynamic routing system for the subpages, which currently display placeholder content.

## Directory Structure
- **`app/page.tsx`**: The main homepage.
- **`app/pages/[slug]/page.tsx`**: The dynamic route that renders the subpages.
- **`components/`**: Reusable components like `Header`, `Footer`, `Slideshow`.
- **`app/globals.css`**: Global styles migrated from the original `style.css`.
- **`public/img/`**: Images and assets.

## Placeholder Pages to Fill
The following pages are currently using the dynamic placeholder template. To add real content for any of these pages, you should create a specific directory for it under `app/pages/`.

For example, to create the **Customer Service** page:
1. Create a directory `app/pages/customer-service/`.
2. Create a `page.tsx` file inside it.
3. Add your custom content.

### List of Pages
- `customer-service`
- `fidelity-assistant`
- `profile`
- `open-account`
- `login`
- `portfolio`
- `account-positions`
- `trade`
- `fidelity-trader-plus-web`
- `fidelity-trader-plus`
- `transfers`
- `cash-management`
- `bill-pay`
- `full-view`
- `security-settings`
- `account-features`
- `documents`
- `tax-forms-information`
- `retirement-distributions`
- `refer-a-friend`
- `what-we-offer`
- `build-your-free-plan`
- `my-goals`
- `financial-basics`
- `building-savings`
- `robo-investing-plus-advice`
- `wealth-management`
- `find-an-advisor`
- `retirement`
- `life-events`
- `saving-investing-for-a-child`
- `charitable-giving`
- `long-term-care-planning`
- `news`
- `wealth-management-insights`
- `watchlist`
- `alerts`
- `stocks-etfs-crypto`
- `mutual-funds`
- `fixed-income-bonds-cds`
- `options`
- `ipos`
- `annuities`
- `learn`
- `retirement-iras`
- `spending-saving`
- `investing-trading`
- `crypto`
- `direct-indexing`
- `etfs`
- `sustainable-investing`
- `managed-accounts`
- `529-college-savings`
- `health-savings-accounts`
- `life-insurance`
- `fidelity-advantage`
- `planning-advice`
- `trading`
- `straightforward-pricing`
- `insights-tools`
- `security-protection`
- `fdic-sipc-coverage`
- `marketplace-solutions`
- `about-fidelity`
- `careers`
- `see-how-to-invest`
- `learn-more`
- `start-trading`
- `plan-for-retirement`
- `why-fidelity`
- `pricing`
- `viewpoints`
- `research`
- `contact-us`
- `help-center`
- `fidelity-locations`
- `privacy`
- `security`
- `disclosures`

## Next Steps
1. **Review Content**: Identify which pages need immediate attention.
2. **Asset Preparation**: Gather images and text for the specific pages.
3. **Component Development**: If pages share similar layouts (e.g., article pages, form pages), create reusable components in `components/`.
