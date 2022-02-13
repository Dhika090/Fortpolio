import sys

print("PROGRAM PEMBAGIAN")

try:
    a = int(input("masukan nilai a:"))
    b = int(input("masukan nilai b:"))

    hasil = a/b
except (ZeroDivisionError, ValueError):
    print("\n Error: nilai b tidak boleh nol")

    print("Oops,That was no valid number.Try again...")
    # sys.exit(1)

# except ValueError:
#     print("Oops,That was no valid number.Try again...")
#     sys.exit(1)
print("\n a/b", hasil)
