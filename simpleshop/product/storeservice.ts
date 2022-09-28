import Product from "interfaces/Product";
import { supabase } from "../client/supabase";

const getProducts = async (): Promise<Product []> => {
  // const user = supabase.auth.user();

  try {
    const { error, data } = await supabase
      .from("products")
      .select("id, title,description,price,category, image, boost")

      .eq("userId", "ff89cccf-8d76-4b3c-a0a1-07b1fa9dad65");

    // .order("id", { ascending: false });

    if (error) {
      throw error;
    }
    console.log("data: ", data);
    return data;
  } catch (error) {
    // alert(error.error_description || error.message);
  }
};

export default getProducts;
