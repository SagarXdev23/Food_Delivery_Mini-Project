import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_PATH = path.join(__dirname, "..", "data", "foods.json");

const ensureDataFile = () => {
  const dir = path.dirname(DATA_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(DATA_PATH)) {
    fs.writeFileSync(DATA_PATH, JSON.stringify([]));
  }
};

const readFoods = () => {
  ensureDataFile();
  const raw = fs.readFileSync(DATA_PATH, "utf8");
  try {
    return JSON.parse(raw || "[]");
  } catch {
    return [];
  }
};

const writeFoods = (foods) => {
  ensureDataFile();
  fs.writeFileSync(DATA_PATH, JSON.stringify(foods, null, 2));
};

const makeId = () => {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
};

// add food item
export const addFood = async (req, res) => {
  try {
    const image_filename = req.file?.filename;
    if (!image_filename) {
      return res.json({ success: false, message: "Image upload failed" });
    }

    const foods = readFoods();
    const newFood = {
      id: makeId(),
      name: req.body.name,
      description: req.body.description,
      price: Number(req.body.price) || 0,
      category: req.body.category,
      image: image_filename,
    };

    foods.push(newFood);
    writeFoods(foods);

    res.json({ success: true, message: "Food item added successfully" });
  } catch (error) {
    console.error("Error adding food item:", error);
    const message = error?.message || "Failed to add food item";
    res.json({ success: false, message });
  }
};


// all food list

const listFood = async (req, res) => {
  try {
    const foods = readFoods();
    res.json({ success: true, data: foods });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Failed to fetch food items" });
  }
};

// remove food item
const removeFood = async (req, res) => {
    try {
        const { id } = req.body;

        const foods = readFoods();
        const index = foods.findIndex((food) => food.id === id);
        if (index === -1) {
          return res.json({ success: false, message: "Food item not found" });
        }

        const [removed] = foods.splice(index, 1);
        writeFoods(foods);

        if (removed?.image) {
          const filePath = path.join(__dirname, "..", "uploads", removed.image);
          fs.unlink(filePath, () => {});
        }

        res.json({ success: true, message: "Food item removed" });
    }
    catch (error) {
        console.log(error);
        res.json({success : false, message : "Error"}) // error aane par response dega
    }
      
}
export {listFood, removeFood}
