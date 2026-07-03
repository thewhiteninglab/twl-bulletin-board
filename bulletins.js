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

      ## 6. Social Media & Content Marketing — Diversifying Our Content Mix

      Molly's videos continue to bring virality and fun to the brand — that engagement is a huge asset. But for Social Media to become a true revenue-generating channel (not just an engagement channel), we need a broader mix of content types working alongside it.

      Two new content streams are already underway:

      - Google Review / testimonial reels — short videos showcasing real client reviews and feedback.
      - Blog posts on the website, promoted on social through Reels.

      [Blog](https://thewhiteninglab.co/blog)

      Showcasing our Google Reviews and blog content positions us as an authority in the industry, strengthens our reputation, and drives more bookings over time.

      **Long-term: The Five Content Pillars**

      Long term, we want to publish the right blend of content following five content pillars. I'll be building an easy production process for four of the five pillars, while Molly continues doing what she does best — the fun, on-camera Lab Life content.

      ![The Five Content Pillars — target content mix and rationale](assets/2026-07-03/five-content-pillars.jpg)

      ## 7. Paid Ads Marketing — Retargeting Launching Soon

      In the next few days, we'll be launching Retargeting Ads targeting people who showed intent to book an appointment (i.e., visitors captured from the new Book an Appointment page — see Update #2). These ads will introduce a new set of promo codes specific to this campaign. As with this round, I'll send everyone the full details on the promos and codes before launch.

      ## 8. Why Are We Using So Many Promo Codes?

      This is intentional. Different codes let us attribute each customer to the specific marketing initiative that brought them in — email, referral, retargeting ads, etc. That attribution tells us which initiatives are working and which aren't, so we can invest more where it counts. Thanks for your patience with the growing list of codes — it's what makes this whole strategy measurable.

      ## 9. Partner & Referral Channel

      We're reaching out to businesses that share our target customer base — salons, gyms, events companies, and similar — so we can tap into their existing market. I'm finalizing this campaign now and will share full details with the team as soon as it's ready to launch.

      ## 10. ORLA Website — Early Foundation

      I've started building the foundational ORLA website. This is just a basic foundation right now and I expect heavy changes as we go.

      [ORLA site](https://orla.thewhiteninglab.co/)

      Once ORLA inventory arrives, we'll begin marketing the brand to our existing customer base — so now is the right time to start keeping ORLA in mind and brainstorming our launch approach.

      Questions on any of the above? Reach out to Angel anytime.
    `
  }
];
