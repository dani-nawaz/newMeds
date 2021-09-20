import blub from './blub.png'
import truck from './truck.png'
import unlike from './unlike.png'
import ordered from './ordered.png'
import payment from './payment.jpg'
import returns from './return.png'

export const pictures = [
  {
    id: 1,
    title: 'Delivery',
    img: truck,
  },
  {
    id: 2,
    title: 'Payment',
    img: payment,
  },
  {
    id: 3,
    title: 'Returns',
    img: returns,
  },
  {
    id: 4,
    title: 'Complaints',
    img: unlike,
  },
  {
    id: 5,
    title: 'Placing an order',
    img: ordered,
  },
  {
    id: 6,
    title: 'How it works',
    img: blub,
  },
]

export const accordianDataDelivery = [
  {
    title: [
      {
        id: 1,
        img: truck,
        head: 'Delivery',
      },
    ],
    data: [
      {
        id: 1,
        ques: 'How long does delivery take ? ',
        ans: 'Delivery times vary based on the option you choose at the checkout. We offer free delivery using the Royal Mail tracked 48 delivery which can take 3-4 days, or you can choose to pay a little extra to have your order delivered in 1-2 days on the DPD Next Day service. We also offer Royal Mail delivery options which can be with you as early as 9am the very next day. However, all delivery options are subject to ordering before the cut-off time and can be affected by weekends and bank holidays. The delivery time is also based on the point at which your order is approved by a prescriber. Therefore you may sometimes need to factor in extra time to allow for a clinical decision to be made.',
      },
      {
        id: 2,
        ques: 'Which countries do you deliver to?',
        ans: 'Our services are only available for those in the United Kingdom. This is because there are strict laws regarding prescription medicines and we are not able to operate outside of the UK.',
      },
      {
        id: 3,
        ques: 'Can I have delivery to a different address?',
        ans: 'Yes, you are able to add additional shipping addresses to your account which you can then select at the checkout. However, your main address must match the address on your card and it will be your main address used in the identity checks in the background.',
      },
      {
        id: 4,
        ques: 'Can I have delivery to a pick up shop?',
        ans: 'There is not an option for you to select this on our checkout but if you select a DPD delivery option, then you will be able to arrange this once you have a tracking number. When your order has left our pharmacy, you will be issued with a tracking number and you can then use this to choose a pick-up shop option on the DPD website. Please note though that this cannot be arranged through us, and you will have to do this directly with DPD.',
      },
      {
        id: 5,
        ques: 'Does my delivery need a signature?',
        ans: 'Yes. To ensure that all orders are securely being delivered to the person that they are for, we require a signature on all delivery options that we offer.',
      },
      {
        id: 6,
        ques: 'How discreet is the packaging?',
        ans: 'Because we acknowledge the importance of privacy when it comes to your health, we pride ourselves on offering a discreet service. All of our orders are sent out in bags that are unbranded and unmarked, bearing no clues as to their contents or who they are from.',
      },
      {
        id: 7,
        ques: 'Can I change my delivery address after the order has been placed?',
        ans: 'Unfortunately, the shipping address cannot be amended after your order has already been placed. We encourage you to double-check all details before finalising your order.',
      },
      {
        id: 8,
        ques: 'Can I track my order?',
        ans: "Yes. By logging in to your account, you are able to track your parcel once it's left our pharmacy and can see when it's due for delivery. The tracking information may look slightly different for Royal Mail and DPD, but both shipping services have this available.",
      },
    ],
  },
  {
    title: [
      {
        id: 1,
        img: payment,
        head: 'Payment',
      },
    ],
    data: [
      {
        id: 1,
        ques: 'What methods of payment do you accept? ',
        ans: 'We accept most major payment methods including Visa, Mastercard, and American Express. However, you must use a card that is registered within the UK.',
      },
      {
        id: 2,
        ques: "Can I use someone else's payment card?",
        ans: "No, the payment card used must belong to the person ordering the medication. This is to increase the security in our system and make sure that medications only ever go to the person it is intended for. It's also because we run identity checks in the background and a non-matching name between your account and your payment card will result in a fail and an automatic rejection of your order.",
      },
      {
        id: 3,
        ques: 'Do you accept payment over the phone?',
        ans: 'We do not accept payment over the phone and all orders must be placed online. Our phone number is designed for customer service purposes only and is not an option for actually placing an order.',
      },
      {
        id: 4,
        ques: 'Why has my card declined?',
        ans: "There are a number of reasons that your card might decline. The first possibility is that you entered the details wrong, in which case please check carefully and try again. Another possibility is that you do not have the funds available, in which case you will need to check your bank account and contact your bank directly if you believe the funds should be there. It could also be because you are attempting to use a card that is registered under someone else's name. In order for your order to go through, you must always use one of your own cards and make sure the name matches the one on your account. If you have tried all of these things and still cannot successfully place an order then either contact ourselves or your bank.",
      },
      {
        id: 5,
        ques: 'What name will appear on my bank statement',
        ans: 'On your bank statement, your payment will be reflected as 247 Uk or 247meds.co.uk.',
      },
      {
        id: 6,
        ques: 'My order has been refused by the prescriber. When will I get my refund?',
        ans: "When you put your repeat order through, we take a pre-authorised payment to capture the funds and then only take them once the order has been approved. If your order is not approved then the pre-authorised funds will simply be released and will return to your available balance within 3-5 working days. Please note that because it's a cancelled payment, not a refund, it will not appear as a transaction on your bank statement. If you have filled in a consultation for a medication you have not had from us before, then no payment will be taken until your consultation has been approved and you have selected your chosen treatment.",
      },
    ],
  },
  {
    title: [
      {
        id: 1,
        img: returns,
        head: 'Returns',
      },
    ],
    data: [
      {
        id: 1,
        ques: 'How long does it take for an order to be returned?',
        ans: 'The return time generally depends on how you send them back and what service you use. If you are returning by courier then DPD will normally return within a week, while Royal Mail can take up to 18 days. Please bear in mind that not all orders are eligible to be returned and you should check our returns policy before attempting to send anything back to us.',
      },
      {
        id: 2,
        ques: 'My order has been returned to sender. What do I do now?',
        ans: 'Once returned to sender, please advise our customer service team (by phone, live chat or email) about whether you require a refund or a re-send, and the reason for returning.',
      },
      {
        id: 3,
        ques: 'How long before I receive my refund?',
        ans: 'Once we have received and processed your returned order (which can take up to 2 weeks), it can take 3-5 working days for you to receive a refund. The amount of time can vary and is dependent on your bank.',
      },
      {
        id: 4,
        ques: "My medication hasn't worked as expected or I no longer need it. Can I return it?",
        ans: 'To keep our patients safe, we cannot accept returns of any opened orders and especially not partially used ones. If you are unhappy with a medication then you can get in touch with us and we may be able to recommend a suitable alternative for you to order next time.',
      },
    ],
  },
  {
    title: [
      {
        id: 1,
        img: unlike,
        head: 'Complaints',
      },
    ],
    data: [
      {
        id: 1,
        ques: 'How do I make a complaint?',
        ans: 'You can make a complaint by emailing us at help@247meds.co.uk. Please try to provide as much information about your complaint as possible in your email, so that we can hopefully resolve it as quickly as possible for you.',
      },
    ],
  },
  {
    title: [
      {
        id: 1,
        img: ordered,
        head: 'Placing an order',
      },
    ],
    data: [
      {
        id: 1,
        ques: 'Why is there a delay with my order?',
        ans: 'Delays with your order may occur due to a number of reasons, such as your consultation being referred to the clinical lead, our system requiring an identity check from you or delays with the shipping service. Please check your order status within your account and feel free to contact our team if you require further information.',
      },
      {
        id: 2,
        ques: 'What does the status of my order mean?',
        ans: "This tells you what stage your order is at. A 'review' status means that your consultation is being looked at by a prescriber. A 'processed' status means your order has been approved and sent to the pharmacy. A 'shipped' status means that your order has successfully left our pharmacy and is on its way to you, using your chosen delivery method. You can then use the tracking tool to find out how close your order is, before the status is then classed as delivered and complete.",
      },
      {
        id: 3,
        ques: 'What do I do if I want to cancel my order?',
        ans: "If you'd like to cancel your order for any reason then please get in touch with our customer service team for assistance (phone is probably best). Please note that cancellations over the weekend may not be possible and you will not be able to cancel your order once it reaches the 'complete' status.",
      },
      {
        id: 4,
        ques: "My medication hasn't worked as expected or I no longer need it. Can I return it?",
        ans: 'To keep our patients safe, we cannot accept returns of any opened orders and especially not partially used ones. If you are unhappy with a medication then you can get in touch with us and we may be able to recommend a suitable alternative for you to order next time.',
      },
    ],
  },
  {
    title: [
      {
        id: 1,
        img: blub,
        head: 'How it works',
      },
    ],
    data: [
      {
        id: 1,
        ques: 'How does your service work?',
        ans: 'Our service is a convenient and safe way to have Ordered Item delivered to your address when you are otherwise unable to go out and get it. Our prices are inclusive of the prescriber , so you will fill out a set of questions to be looked at by a prescriber, the prescription will be processed in our Shop and then shipped to you using your chosen delivery method..',
      },
    ],
  },
]
