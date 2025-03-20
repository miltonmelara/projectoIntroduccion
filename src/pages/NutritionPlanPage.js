import React from 'react';
import '../styles/NutritionPlanPage.css';

const nutritionPlan = [
  {
    day: 'Day 1',
    content: `Breakfast:
Scrambled eggs (3 whole eggs, 2 egg whites)
Oatmeal (½ cup) with cinnamon and 1 tbsp almond butter
Black coffee or green tea

Snack:
Greek yogurt (150g) with berries and honey
10 almonds

Lunch:
Grilled chicken breast (150g)
Quinoa (1/2 cup cooked)
Steamed broccoli and carrots
Olive oil drizzle (1 tbsp)

Snack:
Protein shake (1 scoop whey, banana, almond milk)

Dinner:
Baked salmon (150g) with lemon & garlic
Sweet potato (1 medium)
Asparagus & sautéed spinach`
  },
  {
    day: 'Day 2',
    content: `Breakfast:
Scrambled egg whites (5) with spinach
Whole wheat toast (1 slice)
Cottage cheese (100g)

Snack:
Handful of walnuts & an apple

Lunch:
Lean turkey burger (150g) on a whole wheat bun
Side salad with mixed greens & avocado
Olive oil & balsamic vinegar dressing

Snack:
Hard-boiled eggs (2)
Rice cakes (2) with peanut butter

Dinner:
Stir-fried shrimp (150g) with brown rice (½ cup)
Bell peppers, onions, and snow peas`
  },
  {
    day: 'Day 3',
    content: `Breakfast:
Protein pancakes (oats, egg whites, banana, protein powder)
Greek yogurt topping
Black coffee

Snack:
Cottage cheese (100g)
Handful of cashews

Lunch:
Grilled steak (150g)
Roasted sweet potatoes
Steamed green beans

Snack:
Protein shake with almond milk & frozen berries

Dinner:
Baked cod with lemon & dill
Brown rice (½ cup)
Roasted Brussels sprouts`
  },
  {
    day: 'Day 4',
    content: `Breakfast:
Avocado toast on whole wheat bread
3 scrambled eggs
Orange juice (freshly squeezed)

Snack:
Greek yogurt with honey & granola

Lunch:
Grilled chicken breast (150g)
Quinoa & chickpea salad
Steamed asparagus

Snack:
Mixed nuts & banana

Dinner:
Baked tilapia (150g)
Sweet potato mash
Steamed spinach`
  },
  {
    day: 'Day 5',
    content: `Breakfast:
Omelet (eggs, mushrooms, tomatoes, cheese)
Whole wheat toast
Black coffee

Snack:
Handful of walnuts & an apple

Lunch:
Lean ground beef (150g)
Brown rice (½ cup)
Steamed broccoli

Snack:
Protein shake with frozen berries

Dinner:
Grilled chicken breast
Roasted red potatoes
Side salad with olive oil dressing`
  },
  {
    day: 'Day 6',
    content: `Breakfast:
Protein smoothie (banana, whey, almond milk, peanut butter)
Whole grain toast with almond butter

Snack:
Greek yogurt with nuts

Lunch:
Grilled salmon (150g)
Brown rice (½ cup)
Roasted zucchini & squash

Snack:
Protein bar or homemade energy bites

Dinner:
Turkey chili with kidney beans
Side of steamed broccoli`
  },
  {
    day: 'Day 7',
    content: `Breakfast:
Scrambled eggs (3 whole, 2 egg whites)
Whole wheat toast
Fresh orange juice

Snack:
Almonds & Greek yogurt

Lunch:
Grilled chicken (150g)
Quinoa with roasted veggies
Avocado slices

Snack:
Cottage cheese & apple slices

Dinner:
Baked salmon
Roasted sweet potatoes
Steamed asparagus`
  }
];

const keywords = ["Breakfast:", "Snack:", "Lunch:", "Dinner:", "Option 1:", "Option 2:", "Option 3:"];

const renderNutritionContent = (content) => {
  return content.split('\n').map((line, index) => {
    const trimmed = line.trim();
    // Check if the line starts with any of the keywords
    const keyword = keywords.find(k => trimmed.startsWith(k));
    if (keyword) {
      return (
        <p key={index}>
          <strong>{keyword}</strong>{trimmed.substring(keyword.length)}
        </p>
      );
    }
    return <p key={index}>{line}</p>;
  });
};

const NutritionPlanPage = () => {
  return (
    <div className="nutrition-plan-page">
      <h1>Nutrition Plan</h1>
      <div className="routine-container">
        {nutritionPlan.map((dayItem, index) => (
          <div key={index} className="routine-card">
            <div className="routine-header">
              <h2>{dayItem.day}</h2>
            </div>
            <div className="routine-body">
              {renderNutritionContent(dayItem.content)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NutritionPlanPage;