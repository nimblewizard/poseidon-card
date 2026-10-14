/* Company-wide details shared by every team member's card.
   Edit here once; every card updates on the next page load. */
window.COMPANY = {
  name:     "Poseidon Solutions",
  tagline:  "Water treatment, purification and plumbing for Colorado homes.",
  logo:     "logo.jpg",
  website:  "https://waterbyposeidon.com",
  websiteDisplay: "waterbyposeidon.com",
  address:  "6058 Hollow Tree Ct, Colorado Springs, CO 80918",
  mapsUrl:  "https://www.google.com/maps/dir/?api=1&destination=6058+Hollow+Tree+Ct,+Colorado+Springs,+CO+80918",
  hours:    "Mon–Fri 11am–8pm · Sat 10am–4pm · Sun closed",
  services: ["Whole-home water systems", "RO drinking water", "Water conditioners", "Iron & manganese filters", "Tankless water heaters", "Plumbing"],
  reviewUrl:   "https://search.google.com/local/writereview?placeid=ChIJi0Lxn48iRwoRJfy-xOXq53A",
  reviewTitle: "How did we do today?",
  reviewText:  "A quick Google review takes 30 seconds and helps a local Colorado Springs business more than you'd think.",
  socials: [
    { label: "Facebook",  url: "https://www.facebook.com/PoseidonHomeSolutions/" },
    { label: "Instagram", url: "https://www.instagram.com/poseidonsolutions/" },
    { label: "Website",   url: "https://waterbyposeidon.com" },
  ],
  footer: "Purity from the Gods",
  // Public base URL of this site. Team cards are BASE + "?u=" + slug.
  baseUrl: "https://nimblewizard.github.io/poseidon-card/",
};

/* The default card shown at the base URL with no ?u= (the one on the printed QR). */
window.DEFAULT_PERSON = {
  name:  "Chris Lucia",
  role:  "Technician",
  phone: "+17196323508",
  phoneDisplay: "(719) 632-3508",
  email: "info@waterbyposeidon.com",
  photo: "",   // empty = company logo
};
