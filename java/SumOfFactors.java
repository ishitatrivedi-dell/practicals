import java.util.Scanner;

public class SumOfFactors {
    public static void main(String[] args) {
        System.out.print("Enter a number: ");
        Scanner input = new Scanner(System.in);
        int number = input.nextInt(); // You can change this number to test with other values
        int sum = 0;
        input.close();
        for (int i = 1; i <= number; i++) {
            if (number % i == 0) {
                sum += i;
            }
        }

        System.out.println("The sum of factors of " + number + " is: " + sum);
    }
}