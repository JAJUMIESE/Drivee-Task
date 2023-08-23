function findSuitableOrders(driverRoute, orders) {

  // Создаем массив для хранения подходящих заказов
  let suitableOrders = [];

  let shortestDistance = Infinity; // Инициализируем переменную shortestDistance с бесконечным значением
  let closestOrder = null; // Инициализируем переменную closestOrder как пустую
  
  for (let order of orders) {
    let orderDistance = calculateDistance(order.A, order.B);
    let distanceToOrder = calculateDistance(driverRoute.A, order.A);
    let distanceFromOrder = calculateDistance(driverRoute.B, order.B);
    let driverAndOrderDistance = distanceToOrder + orderDistance + distanceFromOrder;
    }
  }
  
  // Отсортировать массив заказов по driverAndOrderDistance
  orders.sort(function(a, b) {
    let distanceA = calculateDistance(a.A, a.B) + calculateDistance(driverRoute.A, a.A) + calculateDistance(driverRoute.B, a.B);
    let distanceB = calculateDistance(b.A, b.B) + calculateDistance(driverRoute.A, b.A) + calculateDistance(driverRoute.B, b.B);
    return distanceA - distanceB;
  });
  
  // Вывести каждый элемент массива заказов
  for (let order of orders) {
    let orderDistance = calculateDistance(order.A, order.B);
    let distanceToOrder = calculateDistance(driverRoute.A, order.A);
    let distanceFromOrder = calculateDistance(driverRoute.B, order.B);
    let driverAndOrderDistance = distanceToOrder + orderDistance + distanceFromOrder;
  
    console.log(`От A: { x: ${order.A.x}, y: ${order.A.y} } до B: { x: ${order.B.x}, y: ${order.B.y} }, дистанция до заказа: ${distanceToOrder}, общая дистанция: ${driverAndOrderDistance}`);
  }
}

// Функция для расчета расстояния между двумя точками на плоскости
function calculateDistance(point1, point2) {
  return Math.sqrt(Math.pow(Math.abs(point1.x - point2.x), 2) + Math.pow(Math.abs(point1.y - point2.y), 2));
}

// Пример использования
let driverRoute = { A: { x: 0, y: 0 }, B: { x: 10, y: 10 } };
let orders = [
  { A: { x: 2, y: 2 }, B: { x: 5, y: 8 } },
  { A: { x: 8, y: 8 }, B: { x: 12, y: 11 } },
  { A: { x: 3, y: 3 }, B: { x: 7, y: 10 } }
];

findSuitableOrders(driverRoute, orders);
