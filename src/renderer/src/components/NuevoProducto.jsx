import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '../../renderer/ui/card'
import { Button } from '../../renderer/ui/button'
import { Input } from '../../renderer/ui/input'
import { Label } from '../../renderer/ui/label'

import { setDataLocal, checkDataLocal, getDataLocal, addDataArray } from 'dynamiclocalmanage'

function NuevoProducto() {
  function getData() {
    const nameProduct = document.getElementById('nameProduct').value
    const inputCant = parseInt(document.getElementById('inputCant').value)
    const inPrice = parseInt(document.getElementById('inPrice').value)

    checkDataLocal('id')
    checkDataLocal('list')

    const checkValor = getDataLocal('id') === null ? -1 : getDataLocal('id')

    const newId = checkValor + 1
    setDataLocal('id', newId)
    const getNewId = getDataLocal('id')
    const newData = {
      id: getNewId,
      cantDisp: inputCant,
      name: nameProduct,
      price: inPrice
    }

    addDataArray('list', newData)
    console.log(checkValor)
    console.log(nameProduct, inputCant, inPrice)
  }
  return (
    <>
      <div className="m-20">
        <Card>
          <CardHeader>
            <CardTitle>Nuevo Producto</CardTitle>
            <CardDescription>Características del Producto</CardDescription>
          </CardHeader>
          <CardContent>
            <Label>Nombre</Label>
            <Input placeholder="Nombre" id="nameProduct" />
            <Label>Cantidad de entrada</Label>
            <Input placeholder="Cantidad de entrada" type="number" id="inputCant" />
            <Label>Precio</Label>
            <Input placeholder="Precio" type="number" id="inPrice" />
          </CardContent>
          <CardFooter>
            <Button onClick={() => getData()}>Agregar producto</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}

export default NuevoProducto
