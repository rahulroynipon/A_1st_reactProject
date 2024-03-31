class Node:
    def __init__ (self, data=None):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self, head=None):
        self.head = head

    def push(self, data):
        if self.head is None:
            self.head = Node(data)
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = Node(data)
    
    def display(self):
        current = self.head
        while current:
            if current.next:
                print(current.data, end=' --> ')
            else:
                print(current.data)
            current = current.next


if "__main__" == __name__:
    x = LinkedList()
    x.push(1)
    x.push(2)
    x.push(4)
    x.push(7)
    x.push(1)
    x.display()
