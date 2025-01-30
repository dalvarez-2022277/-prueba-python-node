def analizar_ventas(ventas):
    if not ventas:
        return {"error, La lista de ventas esta vacia"}

    promedio = sum(ventas) / len(ventas)
    mayor_venta = max(ventas)
    dia_mayor_venta = ventas.index(mayor_venta) + 1 

    return {
        "promedio": promedio,
        "mayor_venta": mayor_venta,
        "dia_mayor_venta": dia_mayor_venta
    }

ventas = [120, 340, 200, 430, 150]
print(analizar_ventas(ventas))
