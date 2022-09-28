import Product from "interfaces/Product";
import { supabase } from "../client/supabase";

const getProducts = async (): Promise<Product []> => {
  // const user = supabase.auth.user();

  try {
    const { error, data } = await supabase
      .from("products")
      .select("id, title,description,price,category, image, boost")

      .eq("userId", "7222fbcb-2487-4d2b-8997-f6629016f480");

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
