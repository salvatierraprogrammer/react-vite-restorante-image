export const datos = [
    {
        empanadas: [
            { "tipo": "Salteña", "precio": 1500, "precioDoc": 16500 },
            { "tipo": "Carne", "precio": 1300, "precioDoc": 14300 },
            { "tipo": "Pollo", "precio": 1300, "precioDoc": 14300 },
            { "tipo": "Jamón y Queso", "precio": 1300, "precioDoc": 14300 },
            { "tipo": "Verdura", "precio": 1300, "precioDoc": 14300 },
            { "tipo": "Cebolla y Queso", "precio": 1300, "precioDoc": 14300 },
            { "tipo": "Roquefort", "precio": 1300, "precioDoc": 14300 },
            { "tipo": "Caprese", "precio": 1300, "precioDoc": 14300 },
            { "tipo": "Humita", "precio": 1300, "precioDoc": 14300 }
        ],
        pizzas: [
            { "tipo": "Muzzarella", "precio": 7800, "grande": 4100 },
            { "tipo": "Jamón", "precio": 9000, "grande": 4800 },
            { "tipo": "Napolitana", "precio": 10500, "grande": 5300 },
            { "tipo": "Napolitana con Jamón", "precio": 9000, "grande": 4800 },
            { "tipo": "Fugazzeta", "precio": 9000, "grande": 4800 },
            { "tipo": "Calabresa", "precio": 10000, "grande": 5300 },
            { "tipo": "Tres Hermanos", "precio": 10500, "grande": 5300 },
            { "tipo": "Especial", "precio": 12000, "grande": 7500 },
            { "tipo": "Caballero", "precio": 10500, "grande": 7500 },
            { "tipo": "Pizza con Anchoas", "precio": 15000, "grande": 7500 }
        ],
        milanesas: [
            { "tipo": "Milanesa con fritas", "precio": 5000 },
            { "tipo": "Suprema con fritas", "precio": 6000 },
            { "tipo": "Napolitana con fritas", "precio": 8000 },
            { "tipo": "Fugazzeta con fritas", "precio": 8500 },
            { "tipo": "Roquefort con fritas", "precio": 10000 }
        ],
        sandwiches: [
            { "tipo": "Lomito Completo", "precio": 6500 },
            { "tipo": "Lomito Simple", "precio": 5000 },
            { "tipo": "Pollo Simple", "precio": 5000 },
            { "tipo": "Pollo Completo", "precio": 5500 },
            { "tipo": "Hamburguesa Simple", "precio": 4000 },
            { "tipo": "Hamburguesa Completa", "precio": 5000 },
            { "tipo": "Choripán", "precio": 3500 }
        ],
        guarniciones: [
            { "tipo": "Ensalada Mixta", "precio": 500 },
            { "tipo": "Papas Fritas", "precio": 500 }
        ],
        postres: [
            { "tipo": "Flan con Crema", "precio": 1500 },
            { "tipo": "Flan con Dulce de Leche", "precio": 1500 },
            { "tipo": "Helado (cucharada)", "precio": 1000 }
        ],
        minutas: [
            { "tipo": "Milanesa Napolitana", "precio": 5000 },
            { "tipo": "Suprema de Pollo", "precio": 5500 },
            { "tipo": "Omelette Completo", "precio": 3500 },
            { "tipo": "Revuelto Gramajo", "precio": 4000 },
            { "tipo": "Fideos con Tuco", "precio": 3500 },
            { "tipo": "Bife de Chorizo", "precio": 7000 },
            { "tipo": "Pechuga a la Plancha", "precio": 5000 },
            { "tipo": "Milanesa Fugazzeta", "precio": 8500 }
        ],
        platosDelDia: [
            { "tipo": "Tarta de Verdura", "precio": 4000 },
            { "tipo": "Pollo al Horno", "precio": 4500 },
            { "tipo": "Matambre de Cerdo con fritas", "precio": 5500 },
            { "tipo": "Pasta a la Bolognesa", "precio": 4800 },
            { "tipo": "Ñoquis con Estofado", "precio": 5000 }
        ]
    }
];

// Json realtime database
// {
//     "empanadas": {
//       "Salteña": { "precio": 1500, "precioDoc": 16500 },
//       "Carne": { "precio": 1300, "precioDoc": 14300 },
//       "Pollo": { "precio": 1300, "precioDoc": 14300 },
//       "Jamón y queso": { "precio": 1300, "precioDoc": 14300 },
//       "Verdura": { "precio": 1300, "precioDoc": 14300 },
//       "Cebolla y queso": { "precio": 1300, "precioDoc": 14300 },
//       "Roquefort": { "precio": 1300, "precioDoc": 14300 },
//       "Caprese": { "precio": 1300, "precioDoc": 14300 },
//       "Humita": { "precio": 1300, "precioDoc": 14300 }
//     },
//     "pizzas": {
//       "Muzzarella": { "precio": 7800, "grande": 4100 },
//       "Jamón": { "precio": 9000, "grande": 4800 },
//       "Napolitana": { "precio": 10500, "grande": 5300 },
//       "Napolitana con jamón": { "precio": 9000, "grande": 4800 },
//       "Fugazzeta": { "precio": 9000, "grande": 4800 },
//       "Calabresa": { "precio": 10000, "grande": 5300 },
//       "Tres hermanos": { "precio": 10500, "grande": 5300 },
//       "Especial": { "precio": 12000, "grande": 7500 },
//       "Caballero": { "precio": 10500, "grande": 7500 },
//       "Pizza con anchoas": { "precio": 15000, "grande": 7500 }
//     },
//     "milanesas": {
//       "Milanesa con fritas": { "precio": 5000 },
//       "Suprema con fritas": { "precio": 6000 },
//       "Napolitana con fritas": { "precio": 8000 },
//       "Fugazzeta con fritas": { "precio": 8500 },
//       "Roquefort con fritas": { "precio": 10000 }
//     },
//     "sandwiches": {
//       "Lomito completo": { "precio": 6500 },
//       "Lomito simple": { "precio": 5000 },
//       "Pollo simple": { "precio": 5000 },
//       "Pollo completo": { "precio": 5500 },
//       "Hamburguesa simple": { "precio": 4000 },
//       "Hamburguesa completa": { "precio": 5000 },
//       "Choripán": { "precio": 3500 }
//     },
//     "guarniciones": {
//       "Ensalada mixta": { "precio": 500 },
//       "Papas fritas": { "precio": 500 }
//     },
//     "postres": {
//       "Flan con crema": { "precio": 1500 },
//       "Flan con dulce de leche": { "precio": 1500 },
//       "Helado": { "precio": 1000 }
//     },
//     "minutas": {
//       "Milanesa napolitana": { "precio": 5000 },
//       "Suprema de pollo": { "precio": 5500 },
//       "Omelette completo": { "precio": 3500 },
//       "Revuelto gramajo": { "precio": 4000 },
//       "Fideos con tuco": { "precio": 3500 },
//       "Bife de chorizo": { "precio": 7000 },
//       "Pechuga a la plancha": { "precio": 5000 },
//       "Milanesa fugazzeta": { "precio": 8500 }
//     },
//     "Platos del dia": {
//       "Tarta de verdura": { "precio": 4000 },
//       "Pollo al horno": { "precio": 4500 },
//       "Matambre de cerdo con fritas": { "precio": 5500 },
//       "Pasta a la boloñesa": { "precio": 4800 },
//       "Ñoquis con estofado": { "precio": 5000 }
//     }
//   }