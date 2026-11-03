# tkinter module and library for creatinng gui app
import tkinter as  tk
from tkinter import filedialog, messagebox

#main window code
root =tk.Tk()
root.title("My Text Editer")
root.geometry("800x600")

#creat a text area
text=tk.Text(
    root,
    wrap=tk.WORD,
    font=("helvetica",12)
)

text.pack(expand=True,fill=tk.BOTH)

# Main logic start now

#Function 1 -- to creat a new file

def new_file():
    text.delete(1.0,tk.END)

#function 2 - to open a new file
def open_file():
    #open file diologue
    file_path=filedialog.askopenfilenames(
        defaultextension=".text",
        filetypes=[("Text file","*.text")]
    )

    if file_path:
        #open selected file
        with open(file_path,"r") as file:
            text.delete(1.0,tk.END)
            text.insert(tk.END,file.read())

# function 3 -save the file 

def save_file():
    # open saved file diologu
    file_path= filedialog.asksaveasfile(
        defaultextension=".txt",
        filetypes=[("text file","*.txt")]
    )
    if file_path:
        with  open (file_path,"w") as file:
            file.write(text.get(1.0,tk.END))

    messagebox.showinfo("info","file saved successfully") 

# MAIN MENU
menu=tk.Menu(root)
root.config(menu=menu)

file_menu= tk.Menu(menu)

#new, menu , save , exit 

#add  file menu to menu bar 
menu.add_cascade(label="File", menu=file_menu)


file_menu.add_command(label="New",command=new_file)
file_menu.add_command(label="open",command=open_file)
file_menu.add_command(label="Save",command=save_file)
file_menu.add_separator()
file_menu.add_command(label="exit",command=root.quit)

#start and keep the window open
root.mainloop()