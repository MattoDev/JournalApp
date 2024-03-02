import { v2 as cloudinary } from "cloudinary";
import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({
  cloud_name: "dovwehtgg",
  api_key: "657752854584696",
  api_secret: "c4N1ir0eF_Dvmo1RziiyvE6lbKU",
  secure: true,
});

describe("Pruebas en fileUpload", () => {
  test("Debe de subir el archivo correctamente a cloudinary", async () => {
    const imageUrl =
      "https://cdn-1.motorsport.com/static/img/archive/autosport/news/154928_1000101/s8/1000101.jpg";

    const resp = await fetch(imageUrl);
    const blob = await resp.blob();
    const file = new File([blob], "imageTest.jpg");

    const url = await fileUpload(file);
    expect(typeof url).toBe("string");

    // console.log("******************", url);
    const segments = url.split("/");
    const imageId = segments[segments.length - 1].replace(".jpg", "");
    const cloudResp = await cloudinary.api.delete_resources(
      ["journal/" + imageId],
      { resource_type: "image" }
    );
    console.log("****Cloud Response******", cloudResp);
  });

  test("debe de retornar null", async () => {
    const file = new File([], "imageTest.jpg");

    const url = await fileUpload(file);
    expect(url).toBe(null);
  });
});
