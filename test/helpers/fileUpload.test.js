import { fileUpload } from "../../src/helpers/fileUpload";

describe("Pruebas en fileUpload", () => {
  test("Debe de subir el archivo correctamente a cloudinary", async () => {
    const imageUrl =
      "https://cdn-1.motorsport.com/static/img/archive/autosport/news/154928_1000101/s8/1000101.jpg";

    const resp = await fetch(imageUrl);
    const blob = await resp.blob();
    const file = new File([blob], "imageTest.jpg");

    const url = await fileUpload(file);

    expect(typeof url).toBe("string");
  });
});
