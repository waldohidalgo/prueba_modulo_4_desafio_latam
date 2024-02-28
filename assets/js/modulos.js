class Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    this._nombre = nombre; //tipo de dato string
    this._edad = edad; //tipo de dato string
    this._img = img; //tipo de dato string
    this._comentarios = comentarios; //tipo de dato string
    this._sonido = sonido; //tipo de dato string
  }
  get nombre() {
    return this._nombre;
  }
  get edad() {
    return this._edad;
  }
  get img() {
    return this._img;
  }
  get comentarios() {
    return this._comentarios;
  }
  set comentarios(comentarios) {
    this._comentarios = comentarios;
  }
  get sonido() {
    return this._sonido;
  }
}

class Leon extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  rugir() {
    return this.sonido;
  }
}

class Lobo extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  aullar() {
    return this.sonido;
  }
}

class Oso extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  grunir() {
    return this.sonido;
  }
}

class Serpiente extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  sisear() {
    return this.sonido;
  }
}

class Aguila extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  chillar() {
    return this.sonido;
  }
}
export { Aguila, Serpiente, Oso, Lobo, Leon };
