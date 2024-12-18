const lastStoneWeight = (stones) => {
    const pq = new MaxPriorityQueue();

    for (const stone of stones) pq.enqueue(stone);

    while (pq.size() >1) {
        const x = pq.dequeue().element
        const y = pq.dequeue().element

        if( x != y) pq.enqueue(x-y)
    }

    return pq.size() == 1 ? pq.dequeue().element : 0;  
};