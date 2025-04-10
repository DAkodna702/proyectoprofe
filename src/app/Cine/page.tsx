"use client"
import { DataTable } from "@/components/others/TableMuestra/TableAndComplements/dateTable";
import { columns } from "@/components/others/TableMuestra/TypeOfDataWithColums/colums";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

interface Pelicula {
  id: string;
  Titulo: string;
  Sinopsis: string;
  Link: string;
}

export default function Cine() {
    const [peliculas, setPeliculas] = useState<Pelicula[]>([]);
    useEffect(() => {
     const fetchPeliculas = async () => {
       try {
         const response = await fetch(
           "https://oaemdl.es/cinestar_sweb_php/peliculas/cartelera"
         );
         const data = await response.json();
         if (data.success) {
           setPeliculas(data.data);
         }
       } catch (error) {
         console.error("Error al obtener las películas:", error);
       }
     };

     fetchPeliculas();
   }, []);

   return (
     <main className="mx-auto py-8 px-4 sm:px-6">
       <Card className="border border-border shadow-lg">
         <CardHeader className="bg-card text-card-foreground pb-4 border-b border-border">
           <CardTitle className="text-3xl font-bold text-center text-sidebar-primary">
             Películas del Cine
           </CardTitle>
         </CardHeader>
         <CardContent className="p-0 sm:p-6">
             <div className="overflow-hidden rounded-md">
               <div className="overflow-x-auto">
                 <DataTable columns={columns} data={peliculas} />
               </div>
             </div>
         </CardContent>
       </Card>
     </main>
   );
}