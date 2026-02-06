$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$pagesDir = Join-Path $root 'pages'

if (!(Test-Path $pagesDir)) {
  New-Item -ItemType Directory -Path $pagesDir | Out-Null
}

$pages = @(
  @{ title = 'Customer Service'; file = 'customer-service.html' },
  @{ title = 'Fidelity Assistant'; file = 'fidelity-assistant.html' },
  @{ title = 'Profile'; file = 'profile.html' },
  @{ title = 'Open an account'; file = 'open-account.html' },
  @{ title = 'Log in'; file = 'login.html' },

  @{ title = 'Portfolio'; file = 'portfolio.html' },
  @{ title = 'Account Positions'; file = 'account-positions.html' },
  @{ title = 'Trade'; file = 'trade.html' },
  @{ title = 'Fidelity Trader+ Web'; file = 'fidelity-trader-plus-web.html' },
  @{ title = 'Fidelity Trader+'; file = 'fidelity-trader-plus.html' },
  @{ title = 'Transfers'; file = 'transfers.html' },
  @{ title = 'Cash Management'; file = 'cash-management.html' },
  @{ title = 'Bill Pay'; file = 'bill-pay.html' },
  @{ title = 'Full View'; file = 'full-view.html' },
  @{ title = 'Security Settings'; file = 'security-settings.html' },
  @{ title = 'Account Features'; file = 'account-features.html' },
  @{ title = 'Documents'; file = 'documents.html' },
  @{ title = 'Tax Forms & Information'; file = 'tax-forms-information.html' },
  @{ title = 'Retirement Distributions'; file = 'retirement-distributions.html' },
  @{ title = 'Refer a Friend'; file = 'refer-a-friend.html' },

  @{ title = 'What We Offer'; file = 'what-we-offer.html' },
  @{ title = 'Build Your Free Plan'; file = 'build-your-free-plan.html' },
  @{ title = 'My Goals'; file = 'my-goals.html' },
  @{ title = 'Financial Basics'; file = 'financial-basics.html' },
  @{ title = 'Building Savings'; file = 'building-savings.html' },
  @{ title = 'Robo Investing Plus Advice'; file = 'robo-investing-plus-advice.html' },

  @{ title = 'Wealth Management'; file = 'wealth-management.html' },
  @{ title = 'Find an Advisor'; file = 'find-an-advisor.html' },
  @{ title = 'Retirement'; file = 'retirement.html' },
  @{ title = 'Life Events'; file = 'life-events.html' },
  @{ title = 'Saving & Investing for a Child'; file = 'saving-investing-for-a-child.html' },
  @{ title = 'Charitable Giving'; file = 'charitable-giving.html' },
  @{ title = 'Long-Term Care Planning'; file = 'long-term-care-planning.html' },

  @{ title = 'News'; file = 'news.html' },
  @{ title = 'Wealth Management Insights'; file = 'wealth-management-insights.html' },
  @{ title = 'Watchlist'; file = 'watchlist.html' },
  @{ title = 'Alerts'; file = 'alerts.html' },
  @{ title = 'Stocks, ETFs, Crypto'; file = 'stocks-etfs-crypto.html' },
  @{ title = 'Mutual Funds'; file = 'mutual-funds.html' },
  @{ title = 'Fixed Income, Bonds & CDs'; file = 'fixed-income-bonds-cds.html' },
  @{ title = 'Options'; file = 'options.html' },
  @{ title = 'IPOs'; file = 'ipos.html' },
  @{ title = 'Annuities'; file = 'annuities.html' },
  @{ title = 'Learn'; file = 'learn.html' },

  @{ title = 'Retirement & IRAs'; file = 'retirement-iras.html' },
  @{ title = 'Spending & Saving'; file = 'spending-saving.html' },
  @{ title = 'Investing & Trading'; file = 'investing-trading.html' },
  @{ title = 'Crypto'; file = 'crypto.html' },
  @{ title = 'Direct Indexing'; file = 'direct-indexing.html' },
  @{ title = 'ETFs'; file = 'etfs.html' },
  @{ title = 'Sustainable Investing'; file = 'sustainable-investing.html' },
  @{ title = 'Managed Accounts'; file = 'managed-accounts.html' },
  @{ title = '529 College Savings'; file = '529-college-savings.html' },
  @{ title = 'Health Savings Accounts'; file = 'health-savings-accounts.html' },
  @{ title = 'Life Insurance'; file = 'life-insurance.html' },

  @{ title = 'The Fidelity Advantage'; file = 'fidelity-advantage.html' },
  @{ title = 'Planning & Advice'; file = 'planning-advice.html' },
  @{ title = 'Trading'; file = 'trading.html' },
  @{ title = 'Straightforward Pricing'; file = 'straightforward-pricing.html' },
  @{ title = 'Insights & Tools'; file = 'insights-tools.html' },
  @{ title = 'Security & Protection'; file = 'security-protection.html' },
  @{ title = 'FDIC & SIPC Coverage'; file = 'fdic-sipc-coverage.html' },
  @{ title = 'Marketplace Solutions'; file = 'marketplace-solutions.html' },
  @{ title = 'About Fidelity'; file = 'about-fidelity.html' },
  @{ title = 'Careers'; file = 'careers.html' },

  @{ title = 'See how to invest'; file = 'see-how-to-invest.html' },
  @{ title = 'Learn more'; file = 'learn-more.html' },
  @{ title = 'Start trading'; file = 'start-trading.html' },
  @{ title = 'Plan for retirement'; file = 'plan-for-retirement.html' },

  @{ title = 'Why Fidelity'; file = 'why-fidelity.html' },
  @{ title = 'Pricing'; file = 'pricing.html' },
  @{ title = 'Viewpoints'; file = 'viewpoints.html' },
  @{ title = 'Research'; file = 'research.html' },

  @{ title = 'Contact Us'; file = 'contact-us.html' },
  @{ title = 'Help Center'; file = 'help-center.html' },
  @{ title = 'Fidelity Locations'; file = 'fidelity-locations.html' },

  @{ title = 'Privacy'; file = 'privacy.html' },
  @{ title = 'Security'; file = 'security.html' },
  @{ title = 'Disclosures'; file = 'disclosures.html' }
)

$nav = @'
<header class="site-header">
  <div class="header-green">
    <div class="container header-green-inner">
      <a class="brand" href="../index.html" aria-label="Fidelity">
        <img class="brand-logo" src="https://www.fidelity.com/static/fidelity-rebrand/fidelity-2.0/images/fidelity-logo.svg" alt="Fidelity">
      </a>

      <div class="header-links">
        <a class="header-link" href="customer-service.html">Customer Service</a>
        <a class="header-link" href="fidelity-assistant.html">Fidelity Assistant</a>
        <a class="header-link" href="profile.html">Profile</a>
        <a class="header-btn header-btn--light" href="open-account.html">Open an account</a>
        <a class="header-btn header-btn--outline" href="login.html">Log in</a>
      </div>
    </div>
  </div>

  <div class="header-white">
    <div class="container header-white-inner">
      <nav class="nav-links" id="mainNav" aria-label="Primary">
        <div class="nav-item">
          <button class="nav-trigger" type="button" aria-expanded="false">Accounts &amp; Trade <i class="fas fa-chevron-down" aria-hidden="true"></i></button>
          <div class="dropdown" role="menu">
            <div class="dropdown-list" role="none">
              <a class="dropdown-link dropdown-link--locked" href="portfolio.html" role="menuitem"><span class="dropdown-text">Portfolio</span><i class="fas fa-lock dropdown-lock" aria-hidden="true"></i></a>
              <a class="dropdown-link dropdown-link--locked" href="account-positions.html" role="menuitem"><span class="dropdown-text">Account Positions</span><i class="fas fa-lock dropdown-lock" aria-hidden="true"></i></a>
              <a class="dropdown-link dropdown-link--locked" href="trade.html" role="menuitem"><span class="dropdown-text">Trade</span><i class="fas fa-lock dropdown-lock" aria-hidden="true"></i></a>
              <a class="dropdown-link dropdown-link--locked" href="fidelity-trader-plus-web.html" role="menuitem"><span class="dropdown-text">Fidelity Trader+ Web</span><i class="fas fa-lock dropdown-lock" aria-hidden="true"></i></a>
              <a class="dropdown-link" href="fidelity-trader-plus.html" role="menuitem"><span class="dropdown-text">Fidelity Trader+</span></a>
              <a class="dropdown-link" href="transfers.html" role="menuitem"><span class="dropdown-text">Transfers</span></a>
              <a class="dropdown-link dropdown-link--locked" href="cash-management.html" role="menuitem"><span class="dropdown-text">Cash Management</span><i class="fas fa-lock dropdown-lock" aria-hidden="true"></i></a>
              <a class="dropdown-link dropdown-link--locked" href="bill-pay.html" role="menuitem"><span class="dropdown-text">Bill Pay</span><i class="fas fa-lock dropdown-lock" aria-hidden="true"></i></a>
              <a class="dropdown-link dropdown-link--locked" href="full-view.html" role="menuitem"><span class="dropdown-text">Full View</span><i class="fas fa-lock dropdown-lock" aria-hidden="true"></i></a>
              <a class="dropdown-link dropdown-link--locked" href="security-settings.html" role="menuitem"><span class="dropdown-text">Security Settings</span><i class="fas fa-lock dropdown-lock" aria-hidden="true"></i></a>
              <a class="dropdown-link dropdown-link--locked" href="account-features.html" role="menuitem"><span class="dropdown-text">Account Features</span><i class="fas fa-lock dropdown-lock" aria-hidden="true"></i></a>
              <a class="dropdown-link dropdown-link--locked" href="documents.html" role="menuitem"><span class="dropdown-text">Documents</span><i class="fas fa-lock dropdown-lock" aria-hidden="true"></i></a>
              <a class="dropdown-link" href="tax-forms-information.html" role="menuitem"><span class="dropdown-text">Tax Forms &amp; Information</span></a>
              <a class="dropdown-link" href="retirement-distributions.html" role="menuitem"><span class="dropdown-text">Retirement Distributions</span></a>
              <a class="dropdown-link" href="refer-a-friend.html" role="menuitem"><span class="dropdown-text">Refer a Friend</span></a>
            </div>
          </div>
        </div>

        <div class="nav-item">
          <button class="nav-trigger" type="button" aria-expanded="false">Planning &amp; Advice <i class="fas fa-chevron-down" aria-hidden="true"></i></button>
          <div class="dropdown dropdown--planning" role="menu">
            <div class="dropdown-list" role="none">
              <a class="dropdown-link" href="what-we-offer.html" role="menuitem"><span class="dropdown-text">What We Offer</span></a>
              <a class="dropdown-link" href="build-your-free-plan.html" role="menuitem"><span class="dropdown-text">Build Your Free Plan</span></a>
              <a class="dropdown-link dropdown-link--locked" href="my-goals.html" role="menuitem"><span class="dropdown-text">My Goals</span><i class="fas fa-lock dropdown-lock" aria-hidden="true"></i></a>
              <a class="dropdown-link" href="financial-basics.html" role="menuitem"><span class="dropdown-text">Financial Basics</span></a>
              <a class="dropdown-link" href="building-savings.html" role="menuitem"><span class="dropdown-text">Building Savings</span></a>

              <div class="dropdown-item dropdown-item--submenu" role="none">
                <button class="dropdown-subtrigger" type="button" aria-expanded="false"><span class="dropdown-text">Robo Investing Plus Advice</span><i class="fas fa-angle-right dropdown-caret" aria-hidden="true"></i></button>
                <div class="dropdown-submenu" role="menu">
                  <div class="dropdown-subtitle" role="none">Robo Investing Plus Advice</div>
                  <a class="dropdown-link" href="wealth-management.html" role="menuitem"><span class="dropdown-text">Wealth Management</span></a>
                  <a class="dropdown-link" href="find-an-advisor.html" role="menuitem"><span class="dropdown-text">Find an Advisor</span></a>
                  <a class="dropdown-link" href="retirement.html" role="menuitem"><span class="dropdown-text">Retirement</span></a>
                  <a class="dropdown-link" href="life-events.html" role="menuitem"><span class="dropdown-text">Life Events</span></a>
                  <a class="dropdown-link" href="saving-investing-for-a-child.html" role="menuitem"><span class="dropdown-text">Saving &amp; Investing for a Child</span></a>
                  <a class="dropdown-link" href="charitable-giving.html" role="menuitem"><span class="dropdown-text">Charitable Giving</span></a>
                  <a class="dropdown-link" href="long-term-care-planning.html" role="menuitem"><span class="dropdown-text">Long-Term Care Planning</span></a>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="nav-item">
          <button class="nav-trigger" type="button" aria-expanded="false">News &amp; Research <i class="fas fa-chevron-down" aria-hidden="true"></i></button>
          <div class="dropdown" role="menu">
            <div class="dropdown-list" role="none">
              <a class="dropdown-link" href="news.html" role="menuitem"><span class="dropdown-text">News</span></a>
              <a class="dropdown-link" href="wealth-management-insights.html" role="menuitem"><span class="dropdown-text">Wealth Management Insights</span></a>
              <a class="dropdown-link dropdown-link--locked" href="watchlist.html" role="menuitem"><span class="dropdown-text">Watchlist</span><i class="fas fa-lock dropdown-lock" aria-hidden="true"></i></a>
              <a class="dropdown-link dropdown-link--locked" href="alerts.html" role="menuitem"><span class="dropdown-text">Alerts</span><i class="fas fa-lock dropdown-lock" aria-hidden="true"></i></a>
              <a class="dropdown-link" href="stocks-etfs-crypto.html" role="menuitem"><span class="dropdown-text">Stocks, ETFs, Crypto</span></a>
              <a class="dropdown-link" href="mutual-funds.html" role="menuitem"><span class="dropdown-text">Mutual Funds</span></a>
              <a class="dropdown-link" href="fixed-income-bonds-cds.html" role="menuitem"><span class="dropdown-text">Fixed Income, Bonds &amp; CDs</span></a>
              <a class="dropdown-link dropdown-link--locked" href="options.html" role="menuitem"><span class="dropdown-text">Options</span><i class="fas fa-lock dropdown-lock" aria-hidden="true"></i></a>
              <a class="dropdown-link" href="ipos.html" role="menuitem"><span class="dropdown-text">IPOs</span></a>
              <a class="dropdown-link" href="annuities.html" role="menuitem"><span class="dropdown-text">Annuities</span></a>
              <a class="dropdown-link" href="learn.html" role="menuitem"><span class="dropdown-text">Learn</span></a>
            </div>
          </div>
        </div>

        <div class="nav-item">
          <button class="nav-trigger" type="button" aria-expanded="false">Products <i class="fas fa-chevron-down" aria-hidden="true"></i></button>
          <div class="dropdown dropdown--products" role="menu">
            <div class="dropdown-tabs" role="none">
              <a class="dropdown-tab" href="retirement-iras.html">Retirement &amp; IRAs</a>
              <a class="dropdown-tab" href="spending-saving.html">Spending &amp; Saving</a>
              <a class="dropdown-tab dropdown-tab--active" href="investing-trading.html">Investing &amp; Trading</a>
            </div>
            <div class="dropdown-list" role="none">
              <a class="dropdown-link" href="mutual-funds.html" role="menuitem"><span class="dropdown-text">Mutual Funds</span></a>
              <a class="dropdown-link" href="crypto.html" role="menuitem"><span class="dropdown-text">Crypto</span></a>
              <a class="dropdown-link" href="direct-indexing.html" role="menuitem"><span class="dropdown-text">Direct Indexing</span></a>
              <a class="dropdown-link" href="fixed-income-bonds-cds.html" role="menuitem"><span class="dropdown-text">Fixed Income, Bonds &amp; CDs</span></a>
              <a class="dropdown-link" href="etfs.html" role="menuitem"><span class="dropdown-text">ETFs</span></a>
              <a class="dropdown-link" href="options.html" role="menuitem"><span class="dropdown-text">Options</span></a>
              <a class="dropdown-link" href="sustainable-investing.html" role="menuitem"><span class="dropdown-text">Sustainable Investing</span></a>
              <a class="dropdown-link" href="managed-accounts.html" role="menuitem"><span class="dropdown-text">Managed Accounts</span></a>
              <a class="dropdown-link" href="529-college-savings.html" role="menuitem"><span class="dropdown-text">529 College Savings</span></a>
              <a class="dropdown-link" href="health-savings-accounts.html" role="menuitem"><span class="dropdown-text">Health Savings Accounts</span></a>
              <a class="dropdown-link" href="annuities.html" role="menuitem"><span class="dropdown-text">Annuities</span></a>
              <a class="dropdown-link" href="life-insurance.html" role="menuitem"><span class="dropdown-text">Life Insurance</span></a>
            </div>
          </div>
        </div>

        <div class="nav-item">
          <button class="nav-trigger" type="button" aria-expanded="false">Why Fidelity <i class="fas fa-chevron-down" aria-hidden="true"></i></button>
          <div class="dropdown" role="menu">
            <div class="dropdown-list" role="none">
              <a class="dropdown-link" href="fidelity-advantage.html" role="menuitem"><span class="dropdown-text">The Fidelity Advantage</span></a>
              <a class="dropdown-link" href="planning-advice.html" role="menuitem"><span class="dropdown-text">Planning &amp; Advice</span></a>
              <a class="dropdown-link" href="trading.html" role="menuitem"><span class="dropdown-text">Trading</span></a>
              <a class="dropdown-link" href="straightforward-pricing.html" role="menuitem"><span class="dropdown-text">Straightforward Pricing</span></a>
              <a class="dropdown-link" href="insights-tools.html" role="menuitem"><span class="dropdown-text">Insights &amp; Tools</span></a>
              <a class="dropdown-link" href="security-protection.html" role="menuitem"><span class="dropdown-text">Security &amp; Protection</span></a>
              <a class="dropdown-link" href="fdic-sipc-coverage.html" role="menuitem"><span class="dropdown-text">FDIC &amp; SIPC Coverage</span></a>
              <a class="dropdown-link" href="marketplace-solutions.html" role="menuitem"><span class="dropdown-text">Marketplace Solutions</span></a>
              <a class="dropdown-link" href="about-fidelity.html" role="menuitem"><span class="dropdown-text">About Fidelity</span></a>
              <a class="dropdown-link" href="careers.html" role="menuitem"><span class="dropdown-text">Careers</span></a>
            </div>
          </div>
        </div>

      </nav>

      <div class="nav-right">
        <div class="search">
          <i class="fas fa-search search-icon" aria-hidden="true"></i>
          <input class="search-input" type="text" placeholder="How can we help?" aria-label="Search">
        </div>

        <button class="nav-toggle" type="button" aria-label="Toggle menu" aria-controls="mainNav" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </div>
</header>
'@

function Get-PageHtml([string]$title) {
@"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>$title</title>
  <link rel="stylesheet" href="../style.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body>
$nav

<main>
  <section class="hero" style="--hero-bg: url('../img/img1.PNG');">
    <div class="container">
      <div class="hero-card">
        <h1 class="hero-title">Moving money<br>made easy</h1>
        <p class="hero-desc">Transfer your retirement, investing, or savings account in a few simple steps.</p>

        <div class="hero-buttons">
          <a href="open-account.html" class="btn btn-primary">Open an account</a>
          <a href="transfers.html" class="btn btn-secondary">Start a Transfer</a>
        </div>
      </div>
    </div>
  </section>

  <section class="page-header">
    <div class="container">
      <h1 class="page-title">$title</h1>
    </div>
  </section>

  <section class="page-content">
    <div class="container">
      <p>This is a placeholder page for <strong>$title</strong>. Replace this content when you build this page.</p>
      <p><a href="../index.html">Back to Home</a></p>
    </div>
  </section>
</main>

<script src="../style.js"></script>
</body>
</html>
"@
}

$created = 0
$skipped = 0

foreach ($p in $pages) {
  $path = Join-Path $pagesDir $p.file

  if (Test-Path $path) {
    $existing = Get-Content -Path $path -Raw
    if ($existing -notmatch 'This is a placeholder page for') {
      $skipped++
      continue
    }
  }

  Get-PageHtml $p.title | Set-Content -Path $path -Encoding UTF8
  $created++
}

Write-Host "pages/: created=$created skipped=$skipped total=$($pages.Count)"
