import Image from "../models/image";

export default {
  render(image: Image) {
    return {
      id: image.id,
      // aqui precisa sempre atualizar o ip do server, para poder funcionar no celular sempre que ligar o pc
      url: `http://192.168.0.107:3333/images/${image.path}`,
    };
  },
  renderMany(images: Image[]) {
    return images.map((image) => this.render(image));
  },
};
