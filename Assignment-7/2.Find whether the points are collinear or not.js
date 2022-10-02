//if points are collinear then the area of triangle is 0
//formula of area of triangle is : 1/2(x1(y2-y3) + x2(y3-y1) + x3(y1-y2))

function areCollinearPoints(p,q,r) {
    let area;
    area = 1/2 * ((p['x'] * (q['y'] - r['y'])) + (q['x'] * (r['y'] - p['y'])) + (r['x'] * (p['y'] - q['y'])));
    return area === 0;
}

areCollinearPoints({'x':1, 'y':1}, {'x':1, 'y':6}, {'x':0, 'y':9});
