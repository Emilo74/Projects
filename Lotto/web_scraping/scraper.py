from helium import *
from selenium import webdriver
from selenium.webdriver.common.by import By
import pandas as pd
import os
import csv

def format_row(row):
    # Remove unnecessary characters and convert data types
    draw_number = int(row[0])
    winning_numbers = list(map(int, row[1].split('|')))
    multiplier = row[2]
    jackpot = row[3].replace('$', '').replace(',', '')
    wins = row[4]

    # Create a formatted row for data processing
    formatted_row = [draw_number, winning_numbers, multiplier, jackpot, wins]

    # Print the formatted row
    return formatted_row


def start_scraping(month, start_year, end_year, csv_file="all_nlcb_data.csv"):
    all_months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    years = []
    for i in range(start_year, end_year+1):
        years.append(str(i)[2:])

    index = all_months.index(month)
    updated_months = all_months[index:]

    options = webdriver.ChromeOptions()
    options.add_argument('--headless')
    driver = webdriver.Chrome(options=options)



    try:
        # Try to create the file with exclusive creation flag
        fd = os.open(csv_file, os.O_CREAT | os.O_EXCL)
        os.close(fd)

        column_names = ['Draw#', 'Winning Numbers', 'Multiplier', 'Jackpot', 'Wins']
        df = pd.DataFrame(columns=column_names)
    except FileExistsError:
        df = pd.read_csv(csv_file)
        pass


    # Iterate over years
    for year in years:
        if year == years[0]:
            months = updated_months
        else:
            months = all_months

        for month in months:
            driver.get(f"http://www.nlcbplaywhelotto.com/nlcb-cashpot-results/?monthyear={month}-{year}")
    
            print(f"Date: {month} - {year}")
            rows = driver.find_elements(By.CSS_SELECTOR, "table tr.lotto-tr")

            for row in rows:
                data = []
                for cell in row.find_elements(By.TAG_NAME, 'td'):
                    data.append(cell.text)

                formatted_row = format_row(data)
                row_exists = (df.values == row).all(axis=1).any()

                if not row_exists:
                    df.loc[len(df)] = formatted_row
                    df.to_csv(csv_file, index=False)


if __name__ == "__main__":
    start_scraping("May", 2010, 2023, "may_10-jun_23.csv")