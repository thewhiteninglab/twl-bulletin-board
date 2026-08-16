/**
 * BULLETINS DATA
 * ---------------------------------------------------------
 * To add a new bulletin, copy the block below and paste it
 * at the TOP of the BULLETINS array (newest stays on top,
 * but the site re-sorts by date automatically anyway).
 *
 * {
 *   id: "unique-slug-no-spaces",
 *   date: "2026-07-03",          // YYYY-MM-DD (used for sorting + display)
 *   title: "Short headline for the sidebar",
 *   body: `
 *     Plain paragraphs work as-is, separated by a blank line.
 *
 *     You can also use light formatting:
 *     ## Section heading
 *     - bullet point
 *     - another bullet
 *     > A callout / action-box line
 *     > A second line stays in the same box
 *     **bold text**
 *     [link text](https://example.com)
 *     ![caption text](assets/2026-07-03/some-image.jpg)
 *   `
 * },
 *
 * Images: drop the file in an /assets/<date>/ folder next to this
 * file, then reference it with ![caption](assets/<date>/file.jpg).
 *
 * Then save this file and refresh the page. That's it —
 * no build step, no database.
 * ---------------------------------------------------------
 */

const BULLETINS = [
  {
    id: "weekly-update-08-14-26",
    date: "2026-08-14",
    title: "Weekly Marketing Update — Customer Lifecycle Email Results",
    // draft: true hides this bulletin from the public site (sidebar, search,
    // and deep links). Set to false or remove this line to publish it.
    draft: true,
    body: `
      Hi team — here's the August 14 update. We start with where last meeting's open items landed, then the first results from our Customer Lifecycle email series, now live in Square. More updates to come this week.

      ## 1. Last Meeting's Open Items — Status

      Where last meeting's open items stand. Status key: 🟢 Done · 🟡 In progress · 🔴 Not done.

      **Completed:**

      - 🟢 **Angel — Resolve Courtney's IPv4 for the Google Analytics filter.** Done — Courtney was able to provide her IP address, so we can close this.
      - 🟢 **Tabatha — Blog approval: "Is Teeth Whitening Safe if You Have Crowns, Veneers, or Fillings?"** Closed — we didn't get feedback before the August 10 publish date, and the post is now published, so we're closing it out.

      **Still outstanding:**

      - 🔴 **Tabatha — Review and approve "How Many Shades Whiter Will My Teeth Actually Get?"** before its **August 17** publish date, and let Angel know once it's approved. [Read the blog post (Google Doc)](https://docs.google.com/document/d/1ogrPymhHS-ej7TO8uCgEcB1brIc49ULaUGvYOZydRN4/edit?usp=sharing).
      - 🔴 **Tabatha — Review the revised Private Mentorship page** and share your feedback with Angel, so we can keep improving it. [Private Mentorship page](https://thewhiteninglab.co/private-mentorship).
      - 🔴 **Tabatha — Alfred: let Angel know once you're ready to proceed with the transition plan.** No change — carrying this forward as is.

      ## 2. Square Customer Lifecycle Emails

      All five Square email automations have been live since Aug 6 — a strong first ten days. The program is delivering cleanly and already producing revenue and bookings from a system that runs without daily attention: **$150 in attributable sales and 3 bookings**, with deliverability at or near 100%.

      The most valuable outcome of the period wasn't a number — it was a discovery: we identified exactly **why coupon redemptions read as zero**, and the cause is a Square platform limitation, not a weakness in the offers or the emails. That's solvable, and it's the biggest single opportunity in front of us (details below).

      ### At a glance

      Across all five automations: **565 sent, 544 delivered, 222 opens, $150 in sales, and 3 bookings.**

      | Automation | Sent | Open rate | Click rate | CTOR | Result |
      | --- | --- | --- | --- | --- | --- |
      | Winback ($20 off) | 41 | 59% | 2% | 4% | $150 in sales, 1 purchase |
      | Lapsed Booker | 481 | 39% | 1% | 3% | 3 bookings, 178 opens |
      | Drive Repeat Purchase ($5 off) | 14 | 57% | 0% | 0% | Too few sends to read |
      | Google Reviews | 11 | 45% | 9% | 20% | 1 review click |
      | Welcome Email ($5 off) | 18 | 39% | 6% | 14% | 1 click to blog content |

      ### What's working

      - **A clean, stable launch.** Deliverability is 100% on four of five (Lapsed Booker at 96%). Nothing is landing in spam; nothing is broken.
      - **Clients are opening the emails.** Open rates run 39–59%, at the upper end of what service businesses see — the brand has attention in the inbox.
      - **Winback is already paying for itself.** 41 emails produced a $150 sale — about $3.66 of revenue per person contacted — and it happened without the coupon being used, so the demand is real on its own merit.
      - **Lapsed Booker reached a dormant audience at scale.** 481 former clients received it, 178 opened, and 3 bookings followed — 178 people who had gone quiet are paying attention again.
      - **Google Reviews has the most engaged audience.** 1 in 5 openers clicked (20% CTOR), the highest in the program — and reviews compound beyond email by strengthening our Google Business Profile and local search.

      ### The key finding — why redemptions read as zero

      Square Appointments doesn't use coupon codes — there's no field for a client to enter one when booking online, so redemptions were never going to register through that path. This is a platform limitation, not a problem with the offers.

      That's exactly why we already ask clients to write the code in the **Appointment Notes** — the same workaround we run on the paid ads side, which lets the team apply the discount at checkout. To improve conversion, we'll make the path obvious. Every offer email will spell out two easy options:

      1. Type the code in the Appointment Notes when booking online, **or**
      2. Simply present the email at payment, and we'll apply the discount.

      Making redemption obvious is the fastest improvement available this period — and it needs no change to the discounts themselves.

      ### What the data is telling us

      - **Clients respond to education.** The one click from the Welcome email went to the blog post on how long whitening lasts — not the discount button beside it. Helpful content is out-pulling price, which fits a considered purchase like whitening.
      - **Lapsed clients are looking for a way to reach us.** Every click from Lapsed Booker went to the Facebook, Instagram, or website links at the bottom — people wanted to get in touch and took the path they could find. The booking button is already there (highlighted in yellow), so this is refinement, not repair: testing a different button label and repositioning the social/website icons should send more of those 178 opens toward booking.
      - **Three automations need more volume.** Drive Repeat Purchase, Google Reviews, and Welcome sent just 14, 11, and 18 emails — one click swings the percentages a lot, so treat these as directional until the audiences grow.

      ### Plan for next period

      - Add **redemption instructions** to every offer email (note the code at booking, or present it at the counter).
      - Improve the **Lapsed Booker button** — test a different label and review where the social/website icons sit so the booking action stands out.
      - **Pair helpful content with the booking ask** in Welcome and Drive Repeat Purchase — lead with a blog article, booking button directly beneath.
      - **Clean the list** — suppress hard bounces to bring Lapsed Booker's bounce rate from 4% under the 2% healthy benchmark.

      > **FOLLOW-UP LEAD — WINBACK**
      > **Susan Lapreziosa** clicked the "Book" button in the Winback email. She booked her New Patient Whitening Package back on Feb 27, so she's a strong candidate for a personal follow-up to help her rebook. Contact details are in Square (and with Angel).

      *(Figures from Square Marketing automation reports, ~10 days since the Aug 6 launch — an early baseline. Three automations sent under 20 emails, so those percentages are directional. Open rates are inflated by Apple Mail's automatic image loading, so read them mainly as a deliverability signal.)*
    `
  },
  {
    id: "weekly-update-08-07-26",
    date: "2026-08-07",
    title: "Weekly Marketing Update — Follow-Ups from Last Week",
    body: `
      Hi team — here's the August 7 update. We start with where last week's action items landed. More updates to come as things develop this week, with this week's action items consolidated at the end.

      > **🎉 TWO BIG LAUNCHES THIS WEEK**
      > **1. Customer Journey Email Series is live** — approved, image updated, and the automated sequence is now running in Square.
      > **2. Beyond the Lab August 2026 Newsletter launched** — now going out to our list. More details on this later.

      ## 1. Last Week's Open Items — Status

      Where last week's (7/31) action items stand. Status key: 🟢 Done · 🟡 In progress · 🔴 Not done.

      **Completed:**

      - 🟢 **Everyone — Watch Angel's Meta Ads explainer video.** Done — the team has confirmed they've all watched it. Thank you!
      - 🟢 **Tabatha — Revisions / approval on the Customer Journey Email Series.** Done.
      - 🟢 **Angel — Update the image on the Customer Journey emails.** Done — and with that, the **automated email sequence is now live in Square**. Customers automatically receive the right emails after their first booking.
      - 🟢 **Beyond the Lab August 2026 Newsletter.** Launched — the August newsletter is now going out to our list. More details on this later.

      **Still outstanding:**

      - 🔴 **Tabatha — Alfred: let Angel know once you're ready to proceed with the transition plan.** No change — carrying this forward as is.
      - 🔴 **Angel — Resolve Courtney's IPv4 for the Google Analytics filter.** Not done — Courtney's device is returning a MAC address instead of an IPv4. Next step for Courtney is in the box below.

      > **NEXT STEP — COURTNEY**
      > Please try one of these alternate sites — they identify your IPv4 address directly: [whatismyip.io](https://whatismyip.io/) or [expressvpn.com/what-is-my-ip](https://www.expressvpn.com/what-is-my-ip). Copy the IPv4 shown and send it to Angel — once for each connection you use (office, home, mobile data).

      **On hold:**

      - ⏸️ **Tabatha — Review the Partner Referral Program materials.** We're putting the Partner Referral Program review on hold for now, so it's no longer tracked as an open item. We'll bring it back when the timing is right.

      ## 2. Organic Search Is Now Our Strongest Marketing Channel

      Over the past two weeks, we've made improvements and changes to our **SEO and GEO initiatives** to increase our visibility on both search engines and AI platforms. The numbers are starting to show it — here's the analysis we ran today from our TWL Marketing Metrics report. (Note: the report's weeks run Sunday–Saturday, so the latest week covers July 26 – August 1.)

      **This week (July 26 – Aug 1): organic-led and all earned.** Website traffic landed at **141 sessions**, and none of it was paid — essentially all earned. **Organic Search was the largest source at 79 sessions (56% of all traffic)**, with Direct at 51, Organic Social at 8, and Email at 2.

      **Google Search Console was the standout:**

      - **126 combined clicks** — the highest weekly figure on record.
      - **5,282 impressions** at a **2.39% CTR**.
      - **Average position 13.1** — our best (highest-ranking) position on record.

      In plain terms: the site is ranking higher, showing up more often, and converting those impressions into clicks better than in any prior week. Our blog post "Why Are My Teeth Yellow Near the Gumline" was the top impression driver at 1,371 — even edging out the homepage. That's our content marketing doing exactly what it's supposed to do.

      **Week over week:**

      | Metric | July 19–25 | July 26–Aug 1 | Change |
      | --- | --- | --- | --- |
      | Total website traffic | 130 | 141 | +8% |
      | Organic Search sessions | 66 | 79 | +20% |
      | Direct | 49 | 51 | +2 |
      | GSC combined clicks | 89 | 126 | +42% |
      | GSC impressions | 4,414 | 5,282 | +20% |
      | GSC average position | 13.65 | 13.1 | improved |
      | Instagram views | 11,855 | 8,332 | −30% |
      | Instagram reach | 4,478 | 1,813 | −60% |
      | Facebook views | 885 | 887 | flat |

      **The full-July picture confirms it's a trend, not a blip.** Across the month, our average search position improved every single week (roughly 17.9 → 15.3 → 13.7 → 13.1) while impressions climbed and clicks accelerated from 87 to the record 126. Mid-month, traffic peaked with a burst of paid ads — but when that spend paused, organic search quietly picked up the slack and kept weekly traffic stable. Our SEO is **compounding, not fluctuating** — and it means we're becoming less dependent on any single channel to keep traffic coming.

      **Geographically**, our audience remains strongly Maine-centric — Maine was the top region every week. Those are the visitors who can actually book with us.

      ### The Work Behind the Numbers — SEO & GEO Initiatives Shipped

      These results didn't happen on their own. Here's a quick summary of the SEO and GEO work completed over the past two weeks (tracked in Asana):

      **Priority technical fixes**

      - Fixed the **www vs non-www split** — canonicals, redirect, Search Console Domain property, and sitemap now all point to one version of the site, so Google no longer splits our ranking credit across two.
      - Replaced the **placeholder og:images**, so shared links now show proper Whitening Lab branding.

      **Site-wide quick wins (11 items closed)**

      - Verified **robots.txt allows AI crawlers** to read the site.
      - Made the **homepage FAQ answers render server-side**, so search engines and AI tools can actually read them.
      - Cleaned up business-info consistency — one address format (NAP), one years-of-experience number, everywhere.
      - Unified the site footer, fixed image alt text and the broken footer Team link.
      - Metadata cleanup: removed the obsolete meta keywords tag, synced stale twitter: tags with og: tags sitewide.
      - Confirmed the canonical /blog/ URL pattern and removed the old www sitemap from Search Console.
      - Swept the brand-compliance violations found in the site crawl.

      **GEO (AI visibility) items shipped**

      - **llms.txt** live at the site root — a guide for AI engines reading our site.
      - **Named, credentialed bylines and author bio pages** — so AI engines can attribute our content to real experts.
      - **Google Business Profile built out** — the profile AI tools and Google lean on for local answers.
      - First **earned media placement** in motion: the podcast guesting plus its recap blog post.

      **In flight now**

      - A 5-part **CTR fix series** on our top-performing pages (retitling the gumline post for the searches it actually wins, consolidating duplicate URLs, FAQ and LocalBusiness schema, a rewritten Portland snippet) — with an 8-week measurement checkpoint.
      - Remaining GEO items: a Bing Places listing, resolving contradictory facts across public sources, and landing 2–3 more earned media placements.

      This is the work sitting directly behind the record search numbers above — and the CTR series now in flight is aimed at converting our higher rankings into even more clicks.

      ## 3. New Blogs for Review

      Two new blog posts are ready for Tabatha's review and approval, publishing on consecutive weeks:

      - **"Is Teeth Whitening Safe if You Have Crowns, Veneers, or Fillings?"** — publishing **August 10**. [Read the blog post (Google Doc)](https://docs.google.com/document/d/1rwX4Cw9yUWFy8icD65FNI8amkFv__akMDuMSJ5q7Zug/edit?usp=sharing)
      - **"How Many Shades Whiter Will My Teeth Actually Get?"** — publishing **August 17**. [Read the blog post (Google Doc)](https://docs.google.com/document/d/1ogrPymhHS-ej7TO8uCgEcB1brIc49ULaUGvYOZydRN4/edit?usp=sharing)

      These continue the question-shaped, direct-answer content that's been driving our record search numbers (see Section 2).

      > **NEXT ACTION — TABATHA**
      > Review and approve both blog posts before their publish dates — "Crowns, Veneers, or Fillings" before August 10 and "How Many Shades Whiter" before August 17 — and let Angel know once each is approved.

      ## 4. Private Mentorship Program — Page Revised After Tabatha's Feedback

      Quick recap: Tabatha mentioned she'd like to explore two things —

      1. **One-on-one mentorship opportunities** — these can provide value without requiring the resources needed for larger in-person trainings.
      2. Creating **digital resources, templates, guides, and educational materials** that can continue to grow our brand without adding significant operational or financial demands.

      We proposed a dedicated page as the home for the one-on-one mentorship, and Tabatha has given her first round of feedback: she'd prefer not to use the "Strip Like a Pro" naming. The page has been revised accordingly and now lives at [thewhiteninglab.co/private-mentorship](https://thewhiteninglab.co/private-mentorship).

      > **NEXT ACTION — TABATHA**
      > Review the revised [Private Mentorship page](https://thewhiteninglab.co/private-mentorship) and share your feedback with Angel, so we can keep improving the page based on it.

      ## 5. Monthly SEO, GEO & CRO Optimization

      We've made another round of updates and changes to our website across three fronts: **SEO** (search engine optimization), **GEO** (visibility on AI platforms), and **CRO** (conversion rate optimization — turning visitors into clients).

      We'll be optimizing these three every month. Together, the monthly cadence helps us improve our organic traffic, our visibility on both search engines and AI platforms, and — just as importantly — the conversion of visitors into booked clients.

      ## 6. Shopify Store — Redesigned to Match Our Website

      We've updated our Shopify store's design so it matches our main website. One consistent look means visitors moving between the store and the site never feel like they've landed somewhere unfamiliar — we're avoiding any confusion for our visitors.

      We also configured SEO strategies in the Shopify store itself, to improve the store's traffic and conversion.

      ## 7. This Week's Next Actions — Summary

      A quick roll-up of open action items (full detail above).

      **Tabatha**

      - Review and approve the two new blog posts before their publish dates — "Is Teeth Whitening Safe if You Have Crowns, Veneers, or Fillings?" (publishing Aug 10) and "How Many Shades Whiter Will My Teeth Actually Get?" (publishing Aug 17) (Section 3).
      - Review the revised Private Mentorship page and share your feedback with Angel (Section 4).
      - Alfred: let Angel know once you're ready to proceed with the transition plan (Section 1).

      **Courtney**

      - Get your IPv4 from [whatismyip.io](https://whatismyip.io/) or [expressvpn.com/what-is-my-ip](https://www.expressvpn.com/what-is-my-ip) and send it to Angel — once per connection (office, home, mobile data) (Section 1).

      ## Quick Reference

      **Links Mentioned**

      - ["Is Teeth Whitening Safe if You Have Crowns, Veneers, or Fillings?" blog post (Google Doc)](https://docs.google.com/document/d/1rwX4Cw9yUWFy8icD65FNI8amkFv__akMDuMSJ5q7Zug/edit?usp=sharing)
      - ["How Many Shades Whiter Will My Teeth Actually Get?" blog post (Google Doc)](https://docs.google.com/document/d/1ogrPymhHS-ej7TO8uCgEcB1brIc49ULaUGvYOZydRN4/edit?usp=sharing)
      - [Private Mentorship page](https://thewhiteninglab.co/private-mentorship)
    `
  },
  {
    id: "weekly-update-07-31-26",
    date: "2026-07-31",
    title: "Weekly Marketing Update — August Newsletter & Customer Journey Emails",
    body: `
      Hi team — here's the July 31 update. We start with where last week's open items landed (done vs. still outstanding), then this week's updates. This week's action items are consolidated at the end.

      > **⭐ TWO ITEMS ON DECK — WAITING ON TABATHA**
      > **1. Customer Journey Email Series** — Tabatha is reviewing it this week; we're waiting on her revisions (no update since yesterday). Target: set up and activate next week (Section 3).
      > **2. Beyond the Lab August 2026 Newsletter** — needs Tabatha's review and approval. We start sending it to our list Wednesday next week (Section 2).

      ## 1. Last Week's Open Items — Status

      Where last week's (7/24) open items stand. Status key: 🟢 Done · 🟡 In progress · 🔴 Not done.

      **Completed:**

      - 🟢 **Molly — Promote one blog post per week.** Done — Molly and Courtney promoted the ["We Went On a Podcast" blog](https://thewhiteninglab.co/blog/we-went-on-a-podcast). Thank you!
      - 🟢 **Block Internal IP Addresses in Google Analytics.** Done. One loose end: Courtney's device is returning a MAC address instead of an IPv4 — Angel will sort that out with her shortly.
      - 🟢 **Alfred Closure — Transition Plan.** Done — Tabatha is good with the transition plan. New next action: Tabatha to let Angel know once she's ready to proceed.
      - 🟢 **New blogs for review.** Done — all reviewed: "Teeth Whitening Prices Are All Over the Map. Here's Why.", "Does Whitening Damage Your Enamel? The Honest Answer.", and the podcast recap "Charcoal, Confidence, and a 35th Anniversary: We Went On a Podcast."
      - 🟢 **Angel — Complete the remaining SEO & GEO improvement to-dos.** Done.
      - 🟢 **Angel — Post weekly on our Google Business Profile and add fresh photos.** Done.

      **Still outstanding / in progress:**

      - 🔴 **Tabatha — Review the Partner Referral Program materials** (mechanics, 1-Pager, Posters, Outreach Email Sequence). Not done yet. [Partner Program details (Google Doc)](https://docs.google.com/document/d/1ZYPoS8vLJn9GgOS9pAT-pMMgm_Q9Tsd0Qr52TdPA8NU/edit?usp=sharing). Key items to decide on:

      1. Are you okay with giving complimentary experience sessions to our potential partners?
      2. Are you okay giving a ONE-TIME $20 off to partner referrals?
      3. Can we put a Partner Board in our studio to promote our partners to our customers?
      4. Are you okay giving a $100 gift card to a partner at every 5th confirmed referral?
      5. Are you good with our partner marketing collaterals (email sequence and one-pager/poster)?

      - 🟡 **Tabatha — Review & approve the Customer Journey Email Series.** In progress — Tabatha is reviewing it this week; we're waiting on her revisions (no update since yesterday). Target: set up and activate next week — see Section 3. [Full Customer Journey Email Series (Google Doc)](https://docs.google.com/document/d/1KOOBiIwThFMr8W3MpIX0H3wvSXzT5Q85fzKuJtc2Bbc/edit?usp=sharing).
      - 🟡 **Everyone — Watch Angel's Meta Ads explainer video.** Status unconfirmed — if you haven't watched it yet, please do. [Explainer video (Google Drive)](https://drive.google.com/file/d/1eVOsL0LvsJeniFiZptEaYrqLihBZZ2ug/view?usp=sharing).

      ## 2. Beyond the Lab — August 2026 Newsletter (Configured)

      Our August 2026 "Beyond the Lab" newsletter is configured and ready for Tabatha's review. This issue:

      - Promotes the blog ["Teeth Whitening Strips Fail for Two Reasons"](https://thewhiteninglab.co/blog/why-teeth-whitening-strips-fail).
      - Teases the longer, sculpted **at-home whitening strip** we've been developing (a "we went back to the mold" preview).
      - Closes by promoting **The Whitening Lab Startup Guide**.

      **Update (8/4):** the newsletter's CTA has been changed to our new August promo — **code GROUP25**, promoting Group Booking. Book as a group (at least 2 people) and **every member of the group gets $25 off** any service booked this August (valid through August 31). Customers will enter GROUP25 at checkout and list their companions' names in the Appointment Note — so please recognize the code and the group names when those bookings come in.

      ![Beyond the Lab — August 2026 newsletter (updated preview, GROUP25)](assets/2026-07-31/beyond-the-lab-august-2026-group25.jpg)

      We're going to start sending this newsletter to our list **Wednesday next week**, so we need Tabatha's review and approval before then.

      > **NEXT ACTION — TABATHA**
      > Please review and approve the Beyond the Lab August 2026 Newsletter — we start sending it to our list Wednesday next week.

      ## 3. Customer Journey Emails — Configured in Square

      The Customer Journey email series is now configured in Square. Tabatha is reviewing it this week — we're waiting on her revisions (no update since yesterday). Once her revisions are in, it will be ready for **setup and activation next week**.

      > **NEXT ACTIONS — TABATHA & ANGEL**
      > **Tabatha:** Send your revisions / approval on the Customer Journey Email Series so we can set it up and activate it in Square next week.
      > **Angel:** Once approved, update the newsletter photo with a newer one.

      ## 4. New Blog Sidebar — A Home for Promoting Our Resources

      Our blog now has a sidebar where we can promote resources such as **The Whitening Lab Startup Guide**. See it live here: ["We Went On a Podcast" blog post](https://thewhiteninglab.co/blog/we-went-on-a-podcast).

      This will be very useful for promoting resources, products, and other downloadables — we just need to keep driving people to our website and blog (which is exactly what our blog promotion and social efforts are for).

      One note: the sidebar is more visible on **desktop** than on mobile, so mobile readers may not see it as prominently.

      ## 5. This Week's Next Actions — Summary

      A quick roll-up of open action items (full detail in the sections above).

      **Everyone**

      - Watch Angel's Meta Ads explainer video if you haven't yet (Section 1).

      **Tabatha**

      - Send your revisions / approval on the Customer Journey Email Series — target is setup and activation next week (Sections 1 & 3).
      - Review and approve the Beyond the Lab August 2026 Newsletter — sending starts Wednesday next week (Section 2).
      - Review the Partner Referral Program materials and decide on the 5 items above (Section 1).
      - Alfred: let Angel know once you're ready to proceed with the transition plan (Section 1).

      **Angel**

      - Resolve Courtney's IPv4 (currently showing a MAC address) for the Google Analytics filter (Section 1).
      - Once the Customer Journey series is approved, update the newsletter photo with a newer one (Section 3).

      ## Quick Reference

      **Promo Codes Mentioned**

      - GROUP25 — $25 off for every member of a group booking (2+ people) on any service this August, through August 31, 2026 (August newsletter)

      **Links Mentioned**

      - ["We Went On a Podcast" blog](https://thewhiteninglab.co/blog/we-went-on-a-podcast)
      - ["Teeth Whitening Strips Fail for Two Reasons" blog](https://thewhiteninglab.co/blog/why-teeth-whitening-strips-fail)
      - [Full Partner Referral Program plan (Google Doc)](https://docs.google.com/document/d/1ZYPoS8vLJn9GgOS9pAT-pMMgm_Q9Tsd0Qr52TdPA8NU/edit?usp=sharing)
      - [Full Customer Journey Email Series (Google Doc)](https://docs.google.com/document/d/1KOOBiIwThFMr8W3MpIX0H3wvSXzT5Q85fzKuJtc2Bbc/edit?usp=sharing)
      - [Angel's Meta Ads explainer video (Google Drive)](https://drive.google.com/file/d/1eVOsL0LvsJeniFiZptEaYrqLihBZZ2ug/view?usp=sharing)
    `
  },
  {
    id: "weekly-update-07-24-26",
    date: "2026-07-24",
    title: "Weekly Marketing Update — Keeping Our Analytics Clean",
    body: `
      Hi team — we're leading off with the open items still outstanding from the past few weeks (July 3–17) — please help close these out. Then this week's new updates, with this week's fresh action items consolidated at the end.

      ## 1. Open Items from Previous Weeks — Please Close Out

      Before this week's updates, here are the action items still open from the past few weeks. Let's get these wrapped up.

      **1. Molly — Promote one blog post per week on Social Media.** Please promote our blog posts once a week. This gives our audience educational material and brings them to our website (where we can encourage them to book a session). It also adds them to our audience list, so we can target them later when we run paid ads. [See the list of published blog posts (Google Sheet)](https://docs.google.com/spreadsheets/d/1bkwB9esvHN9pzUdTCz1HsRsu7zFFM5-Cf-kERQAx27s/edit?gid=1359978327#gid=1359978327).

      **2. Tabatha — Review the Partner Referral Program materials** (mechanics, 1-Pager, Posters, Outreach Email Sequence). Please review our Partner Program materials. This lets us collaborate with other businesses to bring their audience to learn about The Whitening Lab. [See the Partner Program details (Google Doc)](https://docs.google.com/document/d/1ZYPoS8vLJn9GgOS9pAT-pMMgm_Q9Tsd0Qr52TdPA8NU/edit?usp=sharing). Key items to decide on:

      1. Are you okay with giving complimentary experience sessions to our potential partners?
      2. Are you okay giving a ONE-TIME $20 off to partner referrals?
      3. Can we put a Partner Board in our studio to promote our partners to our customers?
      4. Are you okay giving a $100 gift card to a partner at every 5th confirmed referral?
      5. Are you good with our partner marketing collaterals (email sequence and one-pager/poster)?

      **3. Tabatha — Review the Customer Journey Email Series and approve** (this is blocking the Square setup). This email series will be configured so that a sequence of emails gets sent after a customer's first booking. It ensures the customer keeps moving forward and continues as a paying, active customer after their first session. [Full Customer Journey Email Series (Google Doc)](https://docs.google.com/document/d/1KOOBiIwThFMr8W3MpIX0H3wvSXzT5Q85fzKuJtc2Bbc/edit?usp=sharing).

      **4. Everyone — Watch Angel's explainer video on the Meta Ads campaign.** The video explains the importance and the results of our Meta Ads, since we decided to stop the campaign after running it for a few days.

      @[Angel's explainer — what's happening in our Meta Ads campaign](https://drive.google.com/file/d/1eVOsL0LvsJeniFiZptEaYrqLihBZZ2ug/view?usp=sharing)

      ## 2. Block Internal IP Addresses in Google Analytics

      Right now, every time one of us visits thewhiteninglab.co, Google Analytics counts it as a website visitor — the same as a real customer. That inflates our numbers and makes it harder to read how our actual audience behaves. To fix it, we're going to filter out our own visits by telling Google Analytics to ignore our internet connections' IP addresses.

      To do that, Angel needs each team member's IP address — for every internet connection you use to view the site. Here's how to get yours:

      1. Go to [whatismyip.com](https://www.whatismyip.com/).
      2. The site automatically detects the IP address of your current internet connection.
      3. Copy your **IPv4 address** and send it to Angel.
      4. Do this for **each internet connection you use to view our website** — office Wi-Fi, home Wi-Fi, and mobile data — since each one has its own IP address.

      Once Angel has them, he'll add each address to our internal IP list in Google Analytics so our own visits stop being counted as external visitors.

      > **NEXT ACTION — EVERYONE**
      > Go to [whatismyip.com](https://www.whatismyip.com/), copy your IPv4 address, and send it to Angel — once for each connection you use (office, home, mobile data).

      ## 3. Alfred Closure — Transition Plan

      Following the discussion around Alfred (see last week's update), we've prepared a recommended transition plan for its closure and shared it with Tabatha for review.

      The plan lays out:

      - Proposed **email newsletter and social media messaging** to announce the closure of Alfred.
      - Other items to consider in line with the closure — for example **prepaid services, gift cards**, and similar outstanding commitments.

      [Alfred Transition Plan (Google Doc)](https://docs.google.com/document/d/1SU0a-vN3paiAXanvx_jPtpdffb8mp7L2sjEKjzHWL18/edit?usp=sharing)

      > **NEXT ACTION — TABATHA**
      > Review the Alfred Closure Transition Plan document, then provide the final close date of the Alfred location.

      ## 4. New Blogs for Review

      Two new blog posts are ready for Tabatha's review and approval, each with its own target publish date:

      - **"Teeth Whitening Prices Are All Over the Map. Here's Why."** — targeted for publishing on Monday. [Read the blog post (Google Doc)](https://docs.google.com/document/d/1bGz6WJfkSW_hCQx-0qVj7gZot0IiJTf9HBVejZtFIqc/edit?usp=sharing)
      - **"Does Whitening Damage Your Enamel? The Honest Answer."** — targeted for publishing August 8. [Read the blog post (Google Doc)](https://docs.google.com/document/d/1O3vaEyuJ_zynfWVaMqDXySoz1vf5F4jsBC-i2LVayog/edit?usp=sharing)

      (A third blog — "Charcoal, Confidence, and a 35th Anniversary: We Went On a Podcast" — is also up for review; it's covered in Section 5 since it promotes the podcast guesting.)

      > **NEXT ACTION — TABATHA**
      > Review and approve both blog posts — "Teeth Whitening Prices Are All Over the Map. Here's Why." (publishing Monday) and "Does Whitening Damage Your Enamel? The Honest Answer." (publishing August 8) — and let Angel know once each is approved.

      ## 5. Podcast Guesting — Earned Media Opportunity

      Tabatha and Courtney guested on a podcast (recorded July 23). This is a valuable earned-media placement that supports both traditional SEO (a backlink and brand mentions) and GEO (Generative Engine Optimization: getting The Whitening Lab recognized and surfaced by AI platforms). Podcast transcripts get indexed, so both what's said on the episode and how we're linked afterward matter.

      Good progress already: Angel has the podcast episode link and has transcribed the episode. From that transcript, we've created a blog post to promote the guesting:

      **"Charcoal, Confidence, and a 35th Anniversary: We Went On a Podcast."** This is our way to promote Tabatha and Courtney's podcast guesting. Once approved, we'll publish it next on our website — another opportunity to strengthen our SEO/GEO. [Read the blog post (Google Doc)](https://docs.google.com/document/d/1EGysv7pyS3ekFpsvt74C7hbkdlnayokY72VsNqF8NW4/edit?usp=sharing).

      To capture the rest of the earned-media value, Angel will also secure a show notes backlink to thewhiteninglab.co and log the appearance as an Earned Media Placement (counting toward our SEO and GEO efforts).

      > **NEXT ACTION — TABATHA**
      > Review the "Charcoal, Confidence, and a 35th Anniversary: We Went On a Podcast" blog post. Once approved, we'll publish it on our website.

      ## 6. SEO & GEO (AI Visibility) — Audit Summary

      Angel completed an SEO and GEO (AI visibility) audit for The Whitening Lab. Here's the quick version.

      ### The headline: it's already working

      The website is in good shape for a business this size, and the most encouraging finding is that it's already working:

      - The site **ranks at the top for "teeth whitening Portland Maine."**
      - A blog post published in July was already being **pulled into AI-generated search answers within two weeks.**

      The audit surfaced three kinds of work: **technical fixes**, a **content gap**, and a set of **opportunities around getting found by AI tools** like ChatGPT and Google's AI answers. Next actions are ongoing.

      **Completed so far:**

      - **PRIORITY —** www vs non-www canonical split (canonicals, redirect, Domain property, sitemap).
      - **PRIORITY —** Lovable placeholder og:images replaced.
      - **GEO —** llms.txt live at the site root.
      - **GEO —** Named, credentialed bylines + author bio pages.
      - **GEO —** Google Business Profile built out.

      ### Quick primer: SEO vs GEO

      - **SEO (traditional search):** being found when someone types "teeth whitening near Portland" into Google and the studio appears in the results.
      - **GEO (AI visibility):** being found and *named* when someone asks an AI assistant. More and more people ask ChatGPT or Google's AI summary something like "where should I get my teeth whitened in southern Maine" and get a short answer naming a couple of businesses instead of a list of ten links. Being one of the businesses named is a different job from ranking — and it's becoming just as important.
      - **The good news:** TWL is ahead of local competitors on GEO.

      > **NEXT ACTION — ANGEL**
      > Complete the remaining to-dos for our SEO and GEO improvements.

      ## 7. Marketing Analytics Snapshot — April 26 to July 18

      A quarter's snapshot of our Google Analytics and social analytics (April 26 – July 18). [Full report (Google Sheet)](https://docs.google.com/spreadsheets/d/1ChRlG3V_mtigeXCNOuF8aHUWR3-beXw1xRnIFVUuJa8/edit?usp=sharing).

      ### What's going well

      - **Website traffic is at its highest point in 12 weeks** — and it's been climbing three weeks straight.
      - **Google search is our steadiest source of visitors** — it brings in almost half our traffic every week.
      - **Most importantly, visits from people in Maine are growing.** Those are the people who can actually book with us.

      ### What needs attention

      **Instagram gets seen but not clicked.** We had almost 880,000 views this quarter, but only a few hundred people clicked through, and we gained fewer than 200 followers. We want to convert those views into website visitors — more visitors to our site means more bookings.

      **Two reels in early May went viral.** Big reach, but we haven't yet turned that into site traffic or bookings.

      **Our Google Business Profile is cooling off.** Calls, direction requests, and profile visits have slipped each month since April — and this is where our most ready-to-book customers find us.

      > **RECOMMENDATION — Turn Instagram reach into website visits**
      > • Promote our products in our posts/reels, then drop the website link in the comments (just like we're doing with Tabatha's PDF guide).
      > • Promote blog posts in our posts/reels to bring our audience to the website.
      > • Study the two early-May viral reels to learn what made them work so we can repeat it — and add stronger "book now" prompts to our videos to improve conversion.

      > **NEXT ACTIONS — ANGEL & OPERATIONS TEAM**
      > **Angel:** Post weekly on our Google Business Profile and add fresh photos to reverse the decline (already started).
      > **Operations Team:** Ask happy clients for Google reviews.

      ## 8. This Week's Next Actions — Summary

      A quick roll-up of this week's action items (full detail in each section above). Carried-over open items from previous weeks are in Section 1.

      **Everyone**

      - Send Angel your IPv4 address from [whatismyip.com](https://www.whatismyip.com/) for each connection you use — office, home, mobile (Section 2).

      **Tabatha**

      - Review the Alfred Closure Transition Plan and provide the final close date (Section 3).
      - Review and approve both new blog posts — publishing Monday and August 8 (Section 4).
      - Review the podcast-recap blog ("Charcoal, Confidence, and a 35th Anniversary: We Went On a Podcast"); once approved, we publish it (Section 5).

      **Angel**

      - Secure a show-notes backlink to thewhiteninglab.co and log the podcast as an Earned Media Placement (Section 5).
      - Complete the remaining SEO and GEO improvement to-dos (Section 6).
      - Post weekly on our Google Business Profile and add fresh photos — already started (Section 7).

      **Operations Team**

      - Ask happy clients for Google reviews (Section 7).

      ## Quick Reference

      **Links Mentioned**

      - [Published Blog Posts list (Google Sheet)](https://docs.google.com/spreadsheets/d/1bkwB9esvHN9pzUdTCz1HsRsu7zFFM5-Cf-kERQAx27s/edit?gid=1359978327#gid=1359978327)
      - [Full Partner Referral Program plan (Google Doc)](https://docs.google.com/document/d/1ZYPoS8vLJn9GgOS9pAT-pMMgm_Q9Tsd0Qr52TdPA8NU/edit?usp=sharing)
      - [Full Customer Journey Email Series (Google Doc)](https://docs.google.com/document/d/1KOOBiIwThFMr8W3MpIX0H3wvSXzT5Q85fzKuJtc2Bbc/edit?usp=sharing)
      - [Angel's Meta Ads explainer video (Google Drive)](https://drive.google.com/file/d/1eVOsL0LvsJeniFiZptEaYrqLihBZZ2ug/view?usp=sharing)
      - [Marketing Analytics Snapshot report — Apr 26–Jul 18 (Google Sheet)](https://docs.google.com/spreadsheets/d/1ChRlG3V_mtigeXCNOuF8aHUWR3-beXw1xRnIFVUuJa8/edit?usp=sharing)
      - [What Is My IP — whatismyip.com](https://www.whatismyip.com/)
      - [Alfred Transition Plan (Google Doc)](https://docs.google.com/document/d/1SU0a-vN3paiAXanvx_jPtpdffb8mp7L2sjEKjzHWL18/edit?usp=sharing)
      - ["Teeth Whitening Prices Are All Over the Map. Here's Why." blog post (Google Doc)](https://docs.google.com/document/d/1bGz6WJfkSW_hCQx-0qVj7gZot0IiJTf9HBVejZtFIqc/edit?usp=sharing)
      - ["Does Whitening Damage Your Enamel? The Honest Answer." blog post (Google Doc)](https://docs.google.com/document/d/1O3vaEyuJ_zynfWVaMqDXySoz1vf5F4jsBC-i2LVayog/edit?usp=sharing)
      - ["Charcoal, Confidence, and a 35th Anniversary: We Went On a Podcast." blog post (Google Doc)](https://docs.google.com/document/d/1EGysv7pyS3ekFpsvt74C7hbkdlnayokY72VsNqF8NW4/edit?usp=sharing)
    `
  },
  {
    id: "weekly-update-07-17-26",
    date: "2026-07-17",
    title: "Weekly Marketing Update — Last Week's Follow-Ups",
    body: `
      Hi team — here's how this week's bulletin is organized so it's easy to follow: we start with where last week's action items landed (done vs. still outstanding), then walk through this week's updates — the biggest being our Retargeting Ads launch and pause — and close with a fresh batch of next actions for everyone. Full context on each item below.

      ## 1. Follow-Up on Last Week's Next Actions

      First, where last week's action items stand.

      **Completed:**

      - **Tabatha: Give Angel access to bookings made by customers in Square** — Done. Angel now has access to bookings for promo code attribution.
      - **Tabatha: Create a new Facebook account and send Angel the URL** — Done. Angel can now add it to our Meta Business account.
      - **Tabatha: Add her payment card to our Advertising Account** — Done. Retargeting ads can now run.
      - **Everyone: Review the July Newsletter email so you recognize code SUMMER20** — Done.
      - **Everyone: Direct anyone asking about The Whitening Lab Startup Intensive to the registration website** — Done / ongoing.

      **Still outstanding** (carried into this week's next actions at the end of the bulletin):

      - **Molly: Promote one blog post per week on our Social Media account** — Not yet done.
      - **Tabatha: Review the Partner Referral Program mechanics, Partner 1-Pager, Partner Posters, and Partner Outreach Email Sequence** — Not yet done.
      - **Tabatha: Read and (optionally) edit the "Teeth Whitening Strips Fail for Two Reasons" blog post, then let Angel know once it's the approved version** — Not yet done.
      - **Tabatha: Review the Customer Journey Email Series and let Angel know if it's approved** — Not yet done.

      ## 2. Retargeting Ads — Launched, Then Paused

      This week we launched our first Retargeting Ads campaign. It delivered as expected out of the gate — which confirms the retargeting setup is working end to end (ad account, payment card, pixel/audience, and delivery all functioning).

      > **STATUS UPDATE — CAMPAIGN PAUSED**
      > The retargeting campaign has been deactivated for now to address concerns raised by the leadership team. To walk everyone through exactly what's happening inside our Meta Ads campaign and answer those concerns, Angel recorded a short explainer video — please watch it below.

      @[Angel's explainer — what's happening in our Meta Ads campaign](https://drive.google.com/file/d/1eVOsL0LvsJeniFiZptEaYrqLihBZZ2ug/view?usp=sharing)

      [Open the video in Google Drive](https://drive.google.com/file/d/1eVOsL0LvsJeniFiZptEaYrqLihBZZ2ug/view?usp=sharing)

      A quick reminder of what "retargeting" means here: instead of paying to reach cold strangers, we're paying to re-reach people who already engaged with us — in this case, everyone who interacted with our Instagram in the last 365 days. That's a warm audience that already knows the brand, so it's the most cost-efficient ad money we spend. The ads send them back to our Book an Appointment page so we can turn that interest into bookings.

      **Campaign: TWL | Retargeting | IG Engagers (365d) — July 12–17, 2026 (launch through pause). Status: Paused.**

      | Metric | Value |
      | --- | --- |
      | Amount spent | $17.42 |
      | Reach (unique people) | 1,630 |
      | Impressions | 2,135 |
      | Frequency (avg. views per person) | 1.31 |
      | Link clicks (visitors sent to our site) | 54 |
      | Landing page views (reached our booking page) | 45 |
      | Click-through rate (CTR) | 2.72% |
      | Cost per landing page view (the campaign's result) | $0.39 |
      | CPM (cost per 1,000 impressions) | $8.16 |

      **What the numbers mean**

      - **The setup is confirmed working.** The most important takeaway: before we paused it, the campaign delivered, spent, and drove real results — so the whole retargeting machine we built is functioning correctly.
      - **We reached 1,630 of our warm audience for $17.42** — roughly a penny per person to put The Whitening Lab back in front of someone who already knows us.
      - **Frequency of 1.31 is healthy.** Each person saw the ad about 1.3 times on average — enough to register, nowhere near ad fatigue (where people get annoyed by seeing the same ad too often).
      - **45 landing page views at $0.39 each.** These are 45 warm people who not only clicked but actually loaded our booking page — the campaign's real "result." (Of 54 total link clicks, 45 completed the page load.) That's an inexpensive cost per result for a traffic campaign.
      - **2.72% CTR is strong for this kind of campaign.** As a rough yardstick, a ~1% CTR is considered normal; because this is a warm audience, they clicked at nearly triple that rate — exactly what you'd expect (and want) from retargeting.
      - **The early read was positive — the pause is about leadership alignment, not performance.** The numbers were healthy for a few days of spend. We've stopped delivery while we address the concerns raised; next steps will follow once we've aligned.

      ### Proof the Ads Are Sending Visitors Back to the Site (Google Analytics, July 12–16)

      The Meta numbers above show clicks leaving the ad; the question is whether those visitors actually land on our website. Our Google Analytics traffic report for July 12–16 confirms they do — **Paid Social** (which is this retargeting campaign) shows up as our **third-largest traffic source** for the week, behind only Direct and Organic Search.

      | Traffic Source (Channel) | Sessions |
      | --- | --- |
      | Direct | 96 |
      | Organic Search | 71 |
      | Paid Social (retargeting ads) | 63 |
      | Unassigned | 48 |
      | Email | 9 |
      | Referral | 9 |
      | Organic Social | 3 |

      **What the numbers mean**

      - **Paid Social drove 63 website sessions this week** — real people arriving on our site from the ads, not just clicks reported inside Meta. That's the confirmation we wanted: the ads deliver visitors back to us.
      - **It's already our #3 channel** out of seven, from a standing start mid-week and on a tiny budget. As we scale spend, this channel has clear room to climb.
      - **Why do the session counts here differ slightly from Meta's click counts?** Two different tools counting two slightly different things: Google Analytics counts *sessions* over July 12–16 and folds in any paid-social visit, while Meta counts *link clicks* and *landing page views* on this one campaign. Small gaps like this between platforms are normal — the point is both tools independently confirm the ads are working.

      ### Retargeting Campaign — Roadmap (On Hold)

      > **ON HOLD**
      > This roadmap is paused while we address the leadership concerns covered above in this section. It reflects the original plan and will resume (or be revised) once we've aligned. Sharing it here so everyone knows the intended direction.

      The original plan was: now that the campaign is live and delivering, run it undisturbed for the next few weeks so we collect clean data before we change anything. Editing a campaign too early resets Meta's learning phase and muddies the results, so patience now pays off later.

      - **Week 1 — Let it run.** Leave the campaign untouched for one full week. No changes to budget, creative, or targeting while we gather a clean baseline.
      - **Week 2 — Test 3 new creatives.** After the first week, test 3 other creatives (videos) for one week, head-to-head against the current one, to see which drive the best results.
      - **End of Week 2 — Pick the winners.** With two weeks of data in hand, identify which creatives are actually working.
      - **After creative testing — New landing page (v2).** Once we know the winning creatives, roll out a 2nd version of the landing page and pair it with those proven creatives, so the strongest ads point to a page built to convert them.

      ## 3. Email Marketing — Strong Numbers on the July Newsletter

      Our email channel is performing well, and the standout is our July "Beyond the Lab" Newsletter. Building on June's Starter Campaigns (the Referral, RETURN20, and SMILEPEN emails), we split the July Newsletter into two audiences and sent each its own send:

      - **Engaged group** — contacts who opened or clicked our June Starter Campaigns.
      - **Unengaged group** — contacts who did *not* engage with those June campaigns.

      Sending the same newsletter to both segments lets us measure how each is warming up to us.

      | Metric | Engaged group | Unengaged group |
      | --- | --- | --- |
      | Sent | 256 | 1,244 |
      | Delivered | 254 (99.22%) | 1,015 (81.59%) |
      | Open rate | 65.75% | 44.33% |
      | Click rate | 19.69% | 2.56% |
      | Click-to-open rate | 29.94% | 5.78% |
      | Unsubscribe rate | 1.57% | 0.69% |
      | Bounce / non-delivered rate | 0.78% | 18.41% |
      | Spam complaints | 0 | 0 |

      **What the numbers mean**

      - **The engaged group is exceptional.** A 65.75% open rate and 19.69% click rate sit well above ecommerce email benchmarks (which typically land around 35–45% open and ~2% click). This is our warmest audience, and they're highly responsive.
      - **The unengaged group is warming up too.** Even contacts who ignored June's campaigns opened at 44.33% and clicked at 2.56% — right in line with (or above) typical benchmarks. The list as a whole is reacting well to our newsletters and getting more receptive over time.
      - **Zero spam complaints to date.** Across every campaign in the report we have 0 complaints — a strong sign our content is wanted and our sender reputation is clean.
      - **One cleanup item: the unengaged group's 18.41% bounce rate.** That's high (mostly soft bounces on older, inactive addresses). We'll remove these bounced accounts so we keep a clean mailing list going forward — which also protects our deliverability.

      Looking ahead, the August Newsletter will feature our "Teeth Whitening Strips Fail for Two Reasons" blog post (pending Tabatha's review — see This Week's Next Actions).

      ## 4. Marketing Hours Reduced to 20 Hours/Week

      Effective the week of July 13–16, marketing hours have been reduced to 20 hours per week. Flagging it here so the team knows what to expect: we'll be prioritizing the highest-impact work (the retargeting campaign, the partner outreach launch, and the outstanding review items) within the tighter window, so some lower-priority items may move a bit slower than usual.

      ## 5. Alfred — Mentions Removed from Website & Social

      Per Tabatha's instructions, all mentions of the Alfred site have been removed from our website and our social media accounts.

      > **FOR THE RECORD**
      > On the website, the Alfred changes were reverted back to their original state as of July 20, following a discussion between Tabatha, Tamara, and the attorneys.

      ## 6. This Week's Next Actions

      A fresh batch of action items — combining the new item from this week with the ones still carried over from last week.

      > **NEW — EVERYONE**
      > Watch Angel's explainer video on our Meta Ads campaign (in Section 2) so we're all on the same page about the retargeting pause and can help address the leadership team's concerns.

      **Carried over from last week:**

      - **Molly:** Promote one blog post per week on our Social Media account. [Published blog posts are listed here](https://docs.google.com/spreadsheets/d/1bkwB9esvHN9pzUdTCz1HsRsu7zFFM5-Cf-kERQAx27s/edit?gid=1359978327#gid=1359978327).
      - **Tabatha:** Review the Partner Referral Program mechanics, Partner 1-Pager, Partner Posters, and Partner Outreach Email Sequence.
      - **Tabatha:** Read and (optionally) edit the "Teeth Whitening Strips Fail for Two Reasons" blog post, then let Angel know once it's the approved version. Following up from last week — we plan to feature this post in the August Newsletter, so it now ties directly into email marketing.
      - **Tabatha:** Review the Customer Journey Email Series and let Angel know if it's approved. This one is holding up the Square setup, so please prioritize it when you can.

      ## Quick Reference

      **Links Mentioned**

      - [Published Blog Posts list (Google Sheet)](https://docs.google.com/spreadsheets/d/1bkwB9esvHN9pzUdTCz1HsRsu7zFFM5-Cf-kERQAx27s/edit?gid=1359978327#gid=1359978327)
      - [Full Partner Referral Program plan (Google Doc)](https://docs.google.com/document/d/1ZYPoS8vLJn9GgOS9pAT-pMMgm_Q9Tsd0Qr52TdPA8NU/edit?usp=sharing)
      - [Partner 1-Pager](https://drive.google.com/file/d/1LzPSFmSIK6pYXDHmgkeLjpGl8KFXeqzi/view?usp=sharing)
      - [Partner Posters](https://drive.google.com/drive/folders/1LmHCGHC0zW5ButNoGzA_mdSLlg5_Wiqp?usp=sharing)
      - [Partner Outreach Email Sequence](https://docs.google.com/document/d/1ZYPoS8vLJn9GgOS9pAT-pMMgm_Q9Tsd0Qr52TdPA8NU/edit?tab=t.0)
      - ["Teeth Whitening Strips Fail for Two Reasons" blog post (Google Doc)](https://docs.google.com/document/d/1SmLY8ZZV1vxesZXiM0BbEZQzDjKC0XBgW1lbcnskMTM/edit?usp=sharing)
      - [Full Customer Journey Email Series (Google Doc)](https://docs.google.com/document/d/1KOOBiIwThFMr8W3MpIX0H3wvSXzT5Q85fzKuJtc2Bbc/edit?usp=sharing)
    `
  },
  {
    id: "weekly-update-07-10-26",
    date: "2026-07-10",
    title: "Weekly Marketing Update — Follow-Ups & Social Media Staffing",
    body: `
      Hi team — quick update this week following up on last week's action items, plus a few new updates on the Partner Referral Program and our July Newsletter. More to come as things develop.

      ## 1. Follow-Up on Last Week's Next Actions

      - **Tabatha: Give Angel access to bookings made by customers in Square** — Not yet done.
      - **Everyone: Create a LinkedIn account, fill in your profile, and link The Whitening Lab as your employer** — Done. Everyone now has a LinkedIn account and has linked The Whitening Lab in their work experience.
      - **Tabatha: Create a new Facebook account and send Angel the URL** — Not yet done.
      - **Tabatha: Add her payment card to our Advertising Account** — Not yet done.

      > **STILL OUTSTANDING — TABATHA**
      > Three items from last week still need action: Square booking access for Angel, a new Facebook account (URL sent to Angel), and adding a payment card to our Advertising Account. These are blocking promo code attribution and the retargeting ads launch, so please prioritize when you can.

      ## 2. Molly Now Full-Time on Social Media

      Molly will be working on Social Media full-time for The Whitening Lab going forward.

      Please promote our blog posts — so far, we have 6 published blog posts. [Here's where all published blog posts are listed](https://docs.google.com/spreadsheets/d/1bkwB9esvHN9pzUdTCz1HsRsu7zFFM5-Cf-kERQAx27s/edit?gid=1359978327#gid=1359978327).

      > **ACTION FOR MOLLY**
      > Promote one blog post per week on our Social Media account.

      ## 3. Angel Continues Owning LinkedIn

      Angel will keep owning our LinkedIn presence, since this channel will be used as part of our Partner Marketing Channel going forward.

      ## 4. Partner Referral Program — Mechanics Finalized

      The mechanics for our Partner Referral Program are ready. Rather than a menu of reward options, every partner walks one simple path: **Experience → Refer → Ambassador**.

      - **Stage 1 — Experience:** We comp a whitening session for the partner (owner, plus a key staff member for larger teams), so they experience the studio first-hand and become a walking before-and-after.
      - **Stage 2 — Refer:** The partner gets a unique code (e.g. GLAMROOM, FITLOFT) to send clients our way. Every referral gets $20 off their first session, and we cross-promote each other on our website, social, and in-studio.
      - **Stage 3 — Ambassador:** Every 5 confirmed first-time bookings earns the partner a $100 Whitening Lab gift card, repeating at every 5th referral going forward.

      Tracking runs on the same Square appointment-notes system we already use for promo codes — no new software needed. Target partners are salons, spas, gyms, photographers, bridal/event vendors, and similar local businesses with a loyal client base.

      [Full Partner Referral Program plan (Google Doc)](https://docs.google.com/document/d/1ZYPoS8vLJn9GgOS9pAT-pMMgm_Q9Tsd0Qr52TdPA8NU/edit?usp=sharing)

      ## 5. Next Steps for Tabatha — Partner Outreach Review

      Goal is to start outreach to potential partners on Monday. Ahead of that, please review:

      - Mechanics of the Partner Referral Program (Update #4 above)
      - [Partner 1-Pager](https://drive.google.com/file/d/1LzPSFmSIK6pYXDHmgkeLjpGl8KFXeqzi/view?usp=sharing)
      - [Partner Posters](https://drive.google.com/drive/folders/1LmHCGHC0zW5ButNoGzA_mdSLlg5_Wiqp?usp=sharing)
      - [Partner Outreach Email Sequence](https://docs.google.com/document/d/1ZYPoS8vLJn9GgOS9pAT-pMMgm_Q9Tsd0Qr52TdPA8NU/edit?tab=t.0)

      > **NEXT ACTION FOR TABATHA**
      > Please review the Partner Referral Program mechanics, the Partner 1-Pager, the Partner Posters, and the Partner Outreach Email Sequence — the goal is to begin outreach to potential partners on Monday.

      ## 6. July Newsletter Sending Today — Code SUMMER20

      We're starting to send out our July Newsletter today (already approved by Tabatha). It promotes one of our blog posts and the code **SUMMER20**, which entitles customers to $20 off their next session.

      [Preview of the newsletter email](https://drive.google.com/file/d/1nV68ECOcRpVCFijC8U3KxaOftGzJT2LN/view?usp=sharing)

      > **ACTION FOR THE TEAM**
      > Please review the newsletter email today, so that when a customer books a session with the code SUMMER20, you recognize it as a valid code.

      ## 7. AI Blog Writer — Feedback Round on New Blog Post

      Our AI Blog Writer keeps learning The Whitening Lab's writing style from our blogs, and Tabatha's feedback is integral to making it better over time. We've created a new blog post and would like her feedback on this writing round.

      Blog title: **"Teeth Whitening Strips Fail for Two Reasons"**

      [Read the blog post (Google Doc)](https://docs.google.com/document/d/1SmLY8ZZV1vxesZXiM0BbEZQzDjKC0XBgW1lbcnskMTM/edit?usp=sharing)

      > **NEXT ACTION FOR TABATHA**
      > Please read the blog post and feel free to edit it directly. We'll send the edits back to our AI Blog Writer to capture the differences, so it can adjust its writing style for the next round. Once you're done, let Angel know it's the approved version.

      ## 8. Customer Journey Email Series — Ready for Review

      We've updated our Customer Journey Email Series — a set of emails that go out to customers automatically based on where they are in their lifecycle with us, rather than one-off blasts. Built around what Square Marketing can actually automate, it's four emails:

      - **Welcome** — sends within 24 hours of booking the New Patient Package, so clients know what to expect at their first session.
      - **Touch-Up Offer** — sends 14 days after a New Patient session, to get the first touch-up on the calendar before the shade starts fading.
      - **Touch-Up Reminder** — sends 3 months after a client's last visit (any session), to keep them on a steady touch-up rhythm. This is the core repeat-revenue email.
      - **Cart Abandon** — sends when someone adds a take-home product to their online cart but doesn't check out, to help recover the sale.

      [Full Customer Journey Email Series (Google Doc)](https://docs.google.com/document/d/1KOOBiIwThFMr8W3MpIX0H3wvSXzT5Q85fzKuJtc2Bbc/edit?usp=sharing)

      > **NEXT ACTION FOR TABATHA**
      > Please review the email sequence and let Angel know if it's approved. Plan is to get this set up in Square next week.

      ## 9. FYI: The Whitening Lab Startup Intensive Is Live on Our Website

      The Whitening Lab Startup Intensive is now integrated into our main website, right at the bottom of the homepage. Registration and more information are available on its own landing page.

      [The Whitening Lab Startup Intensive](https://intensive.thewhiteninglab.co/)

      > **FYI FOR THE TEAM**
      > If someone asks about the Startup Intensive or wants to join, just direct them to the website above for registration and details.

      That's it for updates this week — will add more as things come in.

      ## Quick Reference

      **Next Actions Expected from the Team**

      - Tabatha: Give Angel access to bookings made by customers in Square, for promo code attribution. (Outstanding)
      - Tabatha: Create a new Facebook account and send Angel the URL so he can add it to our Meta Business account. (Outstanding)
      - Tabatha: Add her payment card to our Advertising Account so retargeting ads can run. (Outstanding)
      - Molly: Promote one blog post per week on our Social Media account.
      - Tabatha: Review the Partner Referral Program mechanics, Partner 1-Pager, Partner Posters, and Partner Outreach Email Sequence ahead of Monday's partner outreach.
      - Everyone: Review the July Newsletter email so you recognize code SUMMER20 as valid when a customer books with it.
      - Tabatha: Read and (optionally) edit the "Teeth Whitening Strips Fail for Two Reasons" blog post, then let Angel know once it's the approved version.
      - Tabatha: Review the Customer Journey Email Series and let Angel know if it's approved (target: set up in Square next week).
      - Everyone: If someone asks about The Whitening Lab Startup Intensive, direct them to the registration website.

      **Promo Codes Mentioned**

      - SUMMER20 — $20 off next session (July Newsletter, sending today)

      **Links Mentioned**

      - [The Whitening Lab LinkedIn Page](https://www.linkedin.com/company/the-whitening-lab/)
      - [Published Blog Posts list (Google Sheet)](https://docs.google.com/spreadsheets/d/1bkwB9esvHN9pzUdTCz1HsRsu7zFFM5-Cf-kERQAx27s/edit?gid=1359978327#gid=1359978327)
      - [Full Partner Referral Program plan (Google Doc)](https://docs.google.com/document/d/1ZYPoS8vLJn9GgOS9pAT-pMMgm_Q9Tsd0Qr52TdPA8NU/edit?usp=sharing)
      - [Partner 1-Pager](https://drive.google.com/file/d/1LzPSFmSIK6pYXDHmgkeLjpGl8KFXeqzi/view?usp=sharing)
      - [Partner Posters](https://drive.google.com/drive/folders/1LmHCGHC0zW5ButNoGzA_mdSLlg5_Wiqp?usp=sharing)
      - [Partner Outreach Email Sequence](https://docs.google.com/document/d/1ZYPoS8vLJn9GgOS9pAT-pMMgm_Q9Tsd0Qr52TdPA8NU/edit?tab=t.0)
      - [Preview of the July Newsletter email](https://drive.google.com/file/d/1nV68ECOcRpVCFijC8U3KxaOftGzJT2LN/view?usp=sharing)
      - ["Teeth Whitening Strips Fail for Two Reasons" blog post (Google Doc)](https://docs.google.com/document/d/1SmLY8ZZV1vxesZXiM0BbEZQzDjKC0XBgW1lbcnskMTM/edit?usp=sharing)
      - [Full Customer Journey Email Series (Google Doc)](https://docs.google.com/document/d/1KOOBiIwThFMr8W3MpIX0H3wvSXzT5Q85fzKuJtc2Bbc/edit?usp=sharing)
      - [The Whitening Lab Startup Intensive](https://intensive.thewhiteninglab.co/)
    `
  },
  {
    id: "four-week-marketing-recap",
    date: "2026-07-03",
    title: "4-Week Marketing Recap — Multi-Channel Strategy Rollout",
    body: `
      Hi team — here's a full recap of everything we've rolled out in Marketing over the past 4 weeks, plus what's coming next. As Tabatha and I have discussed, The Whitening Lab needs a true multi-channel approach to generating customers. We can't rely on one channel alone (like Social Media/Instagram) — if that channel becomes restrictive (as Meta has been), we need other channels we can depend on to keep the business growing. Please read through this update in full, since several items affect how you talk to customers day to day.

      ## 1. Our Five Marketing Channels

      We now have five active marketing channels working together: Social Media Marketing, Email Marketing, Content Marketing, Paid Ads Marketing, and Partner & Referral Marketing. This diversification protects us — if one channel tightens its rules or slows down, the others keep generating business for us.

      [Full detailed update on each channel (Google Doc)](https://docs.google.com/document/d/1MJe36q__eLF3bcSLrkFWVhQFkCN6RevhQpWgOOq2LoQ/edit?tab=t.d7xzqc4lusfj)

      ## 2. Update on the Customer Booking Process

      We've made an important change to where customers book appointments from our website. The Milkshake link-in-bio site is still active, but it is no longer our primary booking destination.

      - Old (still live, no longer primary): [msha.ke/thewhiteninglab](https://msha.ke/thewhiteninglab)
      - New primary booking page: [thewhiteninglab.co/book-an-appointment](https://thewhiteninglab.co/book-an-appointment)

      Why we made this change: sending people to a page within our own website — instead of out to Milkshake — lets us capture visitors who have a clear intent to book. That means we can later run retargeting ads to that specific, high-intent audience, and our ad spend goes toward people who've already shown interest.

      > **ACTION FOR THE TEAM**
      > When you post on socials and include a call to action, please send people to the Book an Appointment page (not Milkshake). That's what lets us capture them for retargeting.

      ## 3. Email Marketing — 3 Campaigns Launched

      We launched three email campaigns targeting three customer segments, each with its own offer.

      **A. Active Customers (last visit within 3 months) — Refer-a-Friend**

      We promoted the Refer-a-Friend program: the customer simply gives their name to a friend, who mentions it when booking their first visit. The referral gets $20 off their first visit; once that visit is completed, the referring customer also gets $20 off their next visit.

      ![Active Customers email — "You're glowing. Share the love?"](assets/2026-07-03/email-active-customers.jpg)

      [Refer-a-Friend Tracker — Angel logs all eligible successful referrals here](https://docs.google.com/spreadsheets/d/14cbvh2-Pa9Rc8Sg9MRkY-h5coan7TZnSqG3rFYiPMTs/edit?usp=sharing)

      **B. Lapsing Customers (last visit 3–6 months ago) — Code RETURN20**

      We promoted the code RETURN20, which entitles the customer to $20 off their next touch-up session or booking.

      ![Lapsing Customers email — "We've missed you. Ready for a refresh?"](assets/2026-07-03/email-lapsing-customers.jpg)

      **C. Dormant Customers (last visit 6+ months ago) — Code SMILEPEN**

      We promoted the code SMILEPEN, which entitles the customer to a FREE Teeth Whitening Pen after their next visit.

      ![Dormant Customers email — "It's been a while. Let's fix that."](assets/2026-07-03/email-dormant-customers.jpg)

      ## 4. New Refer-a-Friend Page on the Website

      We also created a standing Refer-a-Friend page so any existing customer can refer a friend at any time, not just during the email campaign window.

      [Refer-a-Friend page](https://thewhiteninglab.co/refer-a-friend)

      For submissions through this page, Angel (Marketing) handles distribution of the code and logs it in the same tracker linked above.

      ## 5. How to Process Promo Codes at Booking

      Square doesn't currently have a clean field for entering promo codes during booking. Until that's resolved, here's the process:

      - Customers have been instructed to put the Code, or the name of the friend who referred them, in the Appointment Note field.
      - If you see a code or a person's name in the Appointment Note, that's most likely a discount the customer wants to apply — please honor it.
      - Not every customer will follow this process. If someone mentions verbally, even after their session, that they'd like to redeem a code, please try to honor it as well.

      > **NEXT ACTION FOR TABATHA**
      > Please provide Angel access to bookings made by customers in Square, so he can track the codes customers use for proper attribution.

      ## 6. Social Media & Content Marketing — Diversifying Our Content Mix

      Molly's videos continue to bring virality and fun to the brand — that engagement is a huge asset. But for Social Media to become a true revenue-generating channel (not just an engagement channel), we need a broader mix of content types working alongside it.

      Two new content streams are already underway:

      - Google Review / testimonial reels — short videos showcasing real client reviews and feedback.
      - Blog posts on the website, promoted on social through Reels.

      [Blog](https://thewhiteninglab.co/blog)

      Showcasing our Google Reviews and blog content positions us as an authority in the industry, strengthens our reputation, and drives more bookings over time.

      Here are a couple of sample reels Angel has already put together:

      - [Sample 1 (LinkedIn)](https://www.linkedin.com/posts/if-the-thought-of-a-whitening-session-makes-ugcPost-7477834648434266112-JzGx/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAAI3zRwBFUdG8g9EY9fmaXaIylcH1WiWuXk)
      - [Sample 2 (Facebook)](https://www.facebook.com/share/r/14gBk3GD8rR/)

      **Long-term: The Five Content Pillars**

      Long term, we want to publish the right blend of content following five content pillars. I'll be building an easy production process for four of the five pillars, while Molly continues doing what she does best — the fun, on-camera Lab Life content.

      ![The Five Content Pillars — target content mix and rationale](assets/2026-07-03/five-content-pillars.jpg)

      ## 7. Paid Ads Marketing — Retargeting Launching Soon

      In the next few days, we'll be launching Retargeting Ads targeting people who showed intent to book an appointment (i.e., visitors captured from the new Book an Appointment page — see Update #2). These ads will introduce a new set of promo codes specific to this campaign. As with this round, I'll send everyone the full details on the promos and codes before launch.

      > **NEXT ACTIONS FOR TABATHA**
      > 1. Create a new Facebook account and provide Angel the URL so he can add it to our Meta Business account.
      > 2. Update our Advertising Account with her payment card details so we can run retargeting ads. [Add a payment method here](https://adsmanager.facebook.com/adsmanager/billing_hub/accounts/details/?business_id=388562282943538&asset_id=1314335607582621&session_id=upl_1783104306_667932af-3c43-40ba-a46c-a6b4a82c7605&payment_account_id=1314335607582621)

      ## 8. Why Are We Using So Many Promo Codes?

      This is intentional. Different codes let us attribute each customer to the specific marketing initiative that brought them in — email, referral, retargeting ads, etc. That attribution tells us which initiatives are working and which aren't, so we can invest more where it counts. Thanks for your patience with the growing list of codes — it's what makes this whole strategy measurable.

      ## 9. Partner & Referral Channel

      We're reaching out to businesses that share our target customer base — salons, gyms, events companies, and similar — so we can tap into their existing market. I'm finalizing this campaign now and will share full details with the team as soon as it's ready to launch.

      ## 10. Our LinkedIn Company Page

      We now have an official The Whitening Lab LinkedIn Page: [linkedin.com/company/the-whitening-lab](https://www.linkedin.com/company/the-whitening-lab/)

      Building a presence on LinkedIn helps us in two ways: it gives us visibility to attract new clients and potential partners, and it puts a face to the brand by introducing the owners through LinkedIn.

      > **ACTION FOR THE TEAM**
      > 1. If you don't have a LinkedIn account, please create one. Then fill in your About section, work experience, and education.
      > 2. On your work experience entry, make sure to choose the actual Whitening Lab profile in the Company/Organization field — when you type "The Whitening Lab," our profile should appear in the dropdown. Click on that so your work experience links to our official page.
      > 3. Build connections on LinkedIn. If you know people on LinkedIn, please add them.

      ## 11. ORLA Website — Early Foundation

      I've started building the foundational ORLA website. This is just a basic foundation right now and I expect heavy changes as we go.

      [ORLA site](https://orla.thewhiteninglab.co/)

      Once ORLA inventory arrives, we'll begin marketing the brand to our existing customer base — so now is the right time to start keeping ORLA in mind and brainstorming our launch approach.

      Questions on any of the above? Reach out to Angel anytime.

      ## Quick Reference

      **Next Actions Expected from the Team**

      - Tabatha: Give Angel access to bookings made by customers in Square, for promo code attribution.
      - Everyone: Create a LinkedIn account (if you don't have one), fill in your About/experience/education, link your work experience to The Whitening Lab's LinkedIn profile, and build connections.
      - Tabatha: Create a new Facebook account and send Angel the URL so he can add it to our Meta Business account.
      - Tabatha: Add her payment card to our Advertising Account so retargeting ads can run.

      **Promo Codes Mentioned**

      - RETURN20 — $20 off next touch-up/booking (Lapsing Customers email)
      - SMILEPEN — Free Teeth Whitening Pen after next visit (Dormant Customers email)

      **Links Mentioned**

      - [Full detailed update on each channel (Google Doc)](https://docs.google.com/document/d/1MJe36q__eLF3bcSLrkFWVhQFkCN6RevhQpWgOOq2LoQ/edit?tab=t.d7xzqc4lusfj)
      - [Milkshake link-in-bio (old, still live)](https://msha.ke/thewhiteninglab)
      - [Book an Appointment (new primary booking page)](https://thewhiteninglab.co/book-an-appointment)
      - [Refer-a-Friend Tracker (Google Sheet)](https://docs.google.com/spreadsheets/d/14cbvh2-Pa9Rc8Sg9MRkY-h5coan7TZnSqG3rFYiPMTs/edit?usp=sharing)
      - [Refer-a-Friend page](https://thewhiteninglab.co/refer-a-friend)
      - [The Whitening Lab LinkedIn Page](https://www.linkedin.com/company/the-whitening-lab/)
      - [Blog](https://thewhiteninglab.co/blog)
      - [ORLA site](https://orla.thewhiteninglab.co/)
    `
  }
];
