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
    id: "weekly-update-07-17-26",
    date: "2026-07-17",
    title: "Weekly Marketing Update — Last Week's Follow-Ups",
    body: `
      Hi team — leading off with our Retargeting Ads. We launched them this week and they performed well out of the gate, but we've since paused the campaign to address concerns from the leadership team. Full context below (including a short explainer video), then a quick follow-up on last week's open items. More updates to come as things develop this week.

      ## 1. Retargeting Ads — Launched, Then Paused

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

      ## 2. Proof the Ads Are Sending Visitors Back to the Site (Google Analytics, July 12–16)

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
      - **Why 63 sessions here vs. 43 link clicks in Meta?** Two different tools counting two slightly different things: Google Analytics counts *sessions* over July 12–16 and folds in any paid-social visit, while Meta counts *link clicks* on this one campaign over July 13–16. Small gaps like this between platforms are normal — the point is both tools independently confirm the ads are working.

      ## 3. Retargeting Campaign — Next Actions & Roadmap

      > **ON HOLD**
      > This roadmap is paused while we address the leadership concerns covered in Section 1. It reflects the original plan and will resume (or be revised) once we've aligned. Sharing it here so everyone knows the intended direction.

      The original plan was: now that the campaign is live and delivering, run it undisturbed for the next few weeks so we collect clean data before we change anything. Editing a campaign too early resets Meta's learning phase and muddies the results, so patience now pays off later.

      - **Week 1 (this week) — Let it run.** Angel will not touch the campaign for one full week. No changes to budget, creative, or targeting while we gather a clean baseline.
      - **Week 2 — Test 3 new creatives.** After the first week, we'll test 3 other creatives (videos) for one week, head-to-head against the current one, to see which drive the best results.
      - **End of Week 2 — Pick the winners.** With two weeks of data in hand, we'll identify which creatives are actually working.
      - **After creative testing — New landing page (v2).** Once we know the winning creatives, we'll roll out a 2nd version of the landing page and pair it with those proven creatives, so the strongest ads point to a page built to convert them.

      > **NEXT ACTION FOR ANGEL**
      > Do not touch the retargeting campaign for one week. After that, test 3 new video creatives for a week (two weeks of data total), identify the winning creatives, then build the v2 landing page around them.

      ## 4. Follow-Up on Last Week's Next Actions

      **Completed this week:**

      - **Tabatha: Give Angel access to bookings made by customers in Square** — Done. Angel now has access to bookings for promo code attribution.
      - **Tabatha: Create a new Facebook account and send Angel the URL** — Done. Angel can now add it to our Meta Business account.
      - **Tabatha: Add her payment card to our Advertising Account** — Done. Retargeting ads can now run.
      - **Everyone: Review the July Newsletter email so you recognize code SUMMER20** — Done.
      - **Everyone: Direct anyone asking about The Whitening Lab Startup Intensive to the registration website** — Done / ongoing.

      **Still outstanding:**

      - **Molly: Promote one blog post per week on our Social Media account** — Not yet done.
      - **Tabatha: Review the Partner Referral Program mechanics, Partner 1-Pager, Partner Posters, and Partner Outreach Email Sequence** — Not yet done.
      - **Tabatha: Read and (optionally) edit the "Teeth Whitening Strips Fail for Two Reasons" blog post, then let Angel know once it's the approved version** — Not yet done.
      - **Tabatha: Review the Customer Journey Email Series and let Angel know if it's approved** — Not yet done.

      > **STILL OUTSTANDING — TABATHA**
      > Three review items are still pending: the Partner Referral Program outreach materials, the "Teeth Whitening Strips Fail for Two Reasons" blog post, and the Customer Journey Email Series. The Customer Journey Email Series in particular is holding up the Square setup we're targeting for this week, so please prioritize a review when you can.

      > **STILL OUTSTANDING — MOLLY**
      > Promote one blog post per week on our Social Media account. [Here's where all published blog posts are listed](https://docs.google.com/spreadsheets/d/1bkwB9esvHN9pzUdTCz1HsRsu7zFFM5-Cf-kERQAx27s/edit?gid=1359978327#gid=1359978327).

      That's the follow-up for now — will add more updates to this bulletin as things come in this week.

      ## 5. Marketing Hours Reduced to 20 Hours/Week

      Effective the week of July 13–16, marketing hours have been reduced to 20 hours per week. Flagging it here so the team knows what to expect: we'll be prioritizing the highest-impact work (the retargeting campaign, the partner outreach launch, and the outstanding review items) within the tighter window, so some lower-priority items may move a bit slower than usual.

      ## Quick Reference

      **Next Actions Expected from the Team**

      - Molly: Promote one blog post per week on our Social Media account. (Outstanding)
      - Tabatha: Review the Partner Referral Program mechanics, Partner 1-Pager, Partner Posters, and Partner Outreach Email Sequence. (Outstanding)
      - Tabatha: Read and (optionally) edit the "Teeth Whitening Strips Fail for Two Reasons" blog post, then let Angel know once it's the approved version. (Outstanding)
      - Tabatha: Review the Customer Journey Email Series and let Angel know if it's approved (target: set up in Square this week). (Outstanding)

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
