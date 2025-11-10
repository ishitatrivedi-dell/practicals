
#include <iostream>
using namespace std;
class Node{
    public :
    int data ;
    Node*next;
    Node(int val){
        data = val ;
        next = NULL;
    }
};
class SinglyLinkedList{
    Node* head ;
    public: 
    SinglyLinkedList(){
        head = NULL;
    }
    void InsertAtBeginning(int val){
        Node* newNode = new Node(val);
        if(head == nullptr){
            head = newNode;
        }
        else{
            newNode->next = head ;
            head = newNode ;
        }

        }
        void Display(){
            Node* temp = head ;
            while(temp != nullptr){
                cout<<temp->data<<" -> ";
                temp = temp->next;
            }
            cout<<"NULL"<<endl;
        }
    };
int main(){
    SinglyLinkedList list ;
    list.InsertAtBeginning(10);
    list.InsertAtBeginning(20);
    list.InsertAtBeginning(30);
    list.Display();
    return 0;
}