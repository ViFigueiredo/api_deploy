class HomeController {
  async index(req, res) {
    try {
      res.json('Index');
    } catch (e) {
      console.log(e);
    }
  }
}

export default new HomeController();
