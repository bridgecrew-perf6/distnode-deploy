module.exports = class Recipe {
  constructor(id) {
    this.id = Number(id);
    this.name = null;
  }

  async hydrate() {
    // Pretend DB Lookup
    this.name = `Recipe #${this.id}`;
  }

  toJson() {
    return { id: this.id, name: this.name };
  }
};
