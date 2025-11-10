class Box{
    int width;
    int height;
    int depth;

    Box(){
        width = 10;
        height = 10;
        depth = 10;
    }

    Box(int w, int h, int d){
        width = w;
        height = h;
        depth = d;
    }

    Box(int len){
        width = len;
        height = len;
        depth = len;
    }

    int volume(){
        return width * height * depth;
    }
}

public class multipleConstructor {
    public static void main(String[] args) {
        Box box1 = new Box();
        Box box2 = new Box(5, 10, 15);
        Box box3 = new Box(7);

        System.out.println("Volume of box1: " + box1.volume());
        System.out.println("Volume of box2: " + box2.volume());
        System.out.println("Volume of box3: " + box3.volume());
    }
}