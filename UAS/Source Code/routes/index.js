const express = require("express");
const router = express.Router();
var session = require('express-session');
router.get("/Home", (req, res) => {
    console.log(req.session.name)
  res.render("Home", {
   name :req.session.name
  });
});

router.get("/", (req, res) => res.render("homepage"));
router.get("/logout", (req, res) =>{
    req.session.destroy()
    res.redirect('/')
});
router.get("/NowPlaying", (req, res) => res.render("NowPlaying"));
router.get("/UpComing", (req, res) => res.render("UpComing"));
router.get("/Synopsis1", (req, res) => res.render("Synopsis1"));
router.get("/Synopsis2", (req, res) => res.render("Synopsis2"));
router.get("/Synopsis3", (req, res) => res.render("Synopsis3"));
router.get("/Synopsis4", (req, res) => res.render("Synopsis4"));
router.get("/Synopsis5", (req, res) => res.render("Synopsis5"));
router.get("/Synopsis6", (req, res) => res.render("Synopsis6"));
router.get("/Synopsis7", (req, res) => res.render("Synopsis7"));
router.get("/Synopsis8", (req, res) => res.render("Synopsis8"));
router.get("/Synopsis9", (req, res) => res.render("Synopsis9"));
router.get("/Synopsis10", (req, res) => res.render("Synopsis10"));
router.get("/TicketOrder1", (req, res) => res.render("TicketOrder1"));
router.get("/TicketOrder2", (req, res) => res.render("TicketOrder2"));
router.get("/TicketOrder3", (req, res) => res.render("TicketOrder3"));
router.get("/TicketOrder4", (req, res) => res.render("TicketOrder4"));
router.get("/TicketOrder5", (req, res) => res.render("TicketOrder5"));
router.get("/Theater", (req, res) => res.render("Theater"));
router.get("/Pemilihan-Bangku1", (req, res) =>
  res.render("Pemilihan-Bangku1", {
    qt: req.query.qt,
  })
);
router.get("/ContactUs", (req, res) => res.render("ContactUs"));
router.get("/kode-booking", (req, res) => res.render("kode-booking"));

module.exports = router;
