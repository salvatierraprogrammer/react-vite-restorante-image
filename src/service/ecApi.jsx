import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { base_url } from '../data/base_url'; // Asegúrate de que el path es correcto
export const ecApi = createApi({
  reducerPath: "ecApi",
  baseQuery: fetchBaseQuery({
      baseUrl: base_url,
  }),
  endpoints: (builder) => ({
      getPizzeriaFelipe: builder.query({
          query: () => "prizzeriafelipe/menu2.json",
      }),
      addItem: builder.mutation({
        query: (newItem) => ({
            url: `prizzeriafelipe/menu2/${newItem.categoria}/${newItem.tipo}.json`, // Utiliza tipo como clave
            method: 'PUT', // Cambia a PUT para crear o reemplazar
            body: newItem,
        }),
    
    }),
    updateItem: builder.mutation({
        query: ({ categoria, tipo, ...updatedItem }) => ({
          url: `prizzeriafelipe/menu2/${categoria}/${tipo}.json`, // Ruta correcta para actualizar
          method: 'PUT',
          body: updatedItem,
        }),
      }),
      deleteItem: builder.mutation({
        query: ({ categoria, tipo }) => ({
          url: `prizzeriafelipe/menu2/${categoria}/${tipo}.json`, // Ruta correcta para eliminar
          method: 'DELETE',
        }),
      }),
  }),
});

// Exportamos los hooks generados por createApi para cada endpoint
export const { 
  useGetPizzeriaFelipeQuery,
  useAddItemMutation,
  useUpdateItemMutation,
  useDeleteItemMutation 
} = ecApi;