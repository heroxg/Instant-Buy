export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imgUrl: string;

  constructor(id, name, description= '', price= 0, imgUrl='https://www.google.com/search?q=default+image+png&sxsrf=ALeKk0187ZpdBRlRuQr04UwWJ4MXchGLZQ:1602747425448&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjgj9W3i7bsAhXb8uAKHU4tDzIQ_AUoAXoECAQQAw&biw=1366&bih=657#imgrc=3gMCvEmOYgf2NM') {
    this.id = id
    this.name = name
    this.description = description
    this.price = price
    this.imgUrl = imgUrl
  }
}
