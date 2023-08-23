function findSuitableOrders(driverRoute: Order, orders: Order[]) {
  // Создаем массив для хранения подходящих заказов
  const suitableOrders = [];

  for (const order of orders) {
    // вычисляем расстояние от точки водителя до точки А рекомендованного заказа
    const distanceToOrder = calculateDistance(driverRoute.locationA, order.locationA);
    // вычисляем расстояние от точки А до точки Б рекомендованного заказа
    const orderDistance = calculateDistance(order.locationA, order.locationB);
    // вычисляем расстояние от точки Б рекомендованного заказа до точки Б выполняемого водителем заказа
    const distanceFromOrder = calculateDistance(order.locationB, driverRoute.locationB);
    // суммируем все найденные дистанции
    const sumDistance = distanceToOrder + orderDistance + distanceFromOrder;
    order.distance = sumDistance // необходимо присвоить расчитанную дистанцию корректным образом, иначе это не работает

    // после всех вычислений, добавляем текущий заказ из цикла в общий массив в неотсортированном виде
    suitableOrders.push(order) // тут тоже сомневаюсь что заказ добавляется в общий массив
  }
  
  return suitableOrders;
}

// функция расчета расстояния между двумя точками на плоскости
function calculateDistance(point1: Location, point2: Location) {
  return Math.sqrt(Math.pow(Math.abs(point1.x - point2.x), 2) + Math.pow(Math.abs(point1.y - point2.y), 2));
}
