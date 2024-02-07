import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '../../renderer/ui/card'
import { Input } from '../../renderer/ui/input'
import { Button } from '../../renderer/ui/button'
import { getDataLocalArray, setDataLocal } from 'dynamiclocalmanage'

function Data() {
  const [jsonData, setJsonData] = React.useState(getDataLocalArray('list'))

  const handleExportJson = () => {
    const jsonString = JSON.stringify(jsonData)
    const blob = new Blob([jsonString], { type: 'application/json' })
    const url = URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = 'archivo.json'
    a.click()

    URL.revokeObjectURL(url)
  }

  const handleImportJson = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const importData = JSON.parse(e.target.result)

        const mergedData = [...jsonData, ...importData]

        setJsonData(mergedData)
        setDataLocal('list', mergedData)
      }
      reader.readAsText(file)
    }
  }
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Exportar productos</CardTitle>
          <CardDescription>Generar archivos de datos del Inventario</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={handleExportJson}>Exportar Inventario</Button>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Importar productos</CardTitle>
          <CardDescription>Agregar nuevos productos al inventario</CardDescription>
        </CardHeader>
        <CardContent>
          <Input id="importJSON" type="file" onChange={handleImportJson} />
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </>
  )
}

export default Data
