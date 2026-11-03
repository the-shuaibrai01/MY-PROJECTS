expenseslist = []  # list of expenses in form of dictionary
print("Welcome to Expense Tracker :")

while True:
    print("\n===== MENU =====")
    print("1. Add Expense")
    print("2. View All Expenses")
    print("3. View Total Kharcha")
    print("4. Exit")

    choice = input("Please enter your choice: ")

    # 1. Add Expense
    if choice == "1":
        date = input("Enter date of expense: ")
        category = input("Enter category (food, travel, makeup, book): ")
        description = input("Add more detail of expense: ")
        amount = float(input("Enter the amount: "))

        expense = {
            "date": date,
            "category": category,
            "description": description,
            "amount": amount
        }

        expenseslist.append(expense)
        print("\nDone bro! Expense added successfully.")

    # 2. View all expenses
    elif choice == "2":
        if len(expenseslist) == 0:
            print("No expense added yet.")
        else:
            print("\n===== Your Expenses =====")
            count = 1
            for eachkharcha in expenseslist:
                print(f"Kharcha {count} -> {eachkharcha['date']}, "
                      f"{eachkharcha['category']}, "
                      f"{eachkharcha['description']}, "
                      f"{eachkharcha['amount']}")
                count += 1

    # 3. View total kharcha
    elif choice == "3":
        total = 0
        for eachkharcha in expenseslist:
            total += eachkharcha["amount"]

        print("\nTotal Kharcha = ", total)

    # 4. Exit
    elif choice == "4":
        print("Thank you for using the Expense Tracker! Bye :)")
        break

    else:
        print("Invalid choice. Try again...")