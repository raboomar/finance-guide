from cgitb import text
import math
import requests
from bs4 import BeautifulSoup

headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'}
URL = "https://finance.yahoo.com/quote/AMZN/key-statistics?p=AMZN"

page = requests.get(URL, headers=headers)
soup = BeautifulSoup(page.text, 'html.parser')


def get_html(url):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'}
    URL = url
    page = requests.get(URL, headers=headers)
    soup = BeautifulSoup(page.text, 'html.parser')
    return soup


def get_most_active():
    URL = "https://finance.yahoo.com/most-active"

    soup = get_html(URL)
    test = soup.find_all("a", {"class": 'Fw(600) C($linkColor)'})
    for name in test:
        get_stock_data(name.text)


def get_stock_data(stock_name):
    URL = f"https://finance.yahoo.com/quote/{stock_name}/key-statistics?p={stock_name}"
    soup = get_html(URL)
    fetch_data(soup)


def fetch_data(soup):
    name = soup.find("h1", {'class': 'D(ib) Fz(18px)'}).text
    price = soup.find("div", {'class': 'D(ib) Mend(20px)'}).text
    eps = soup.find(string="Diluted EPS").find_next('td').text
    bvp = soup.find(string="Book Value Per Share").find_next('td').text
    condition = price.find("-") != -1
    end_index = price.find('.')+3
    stock_price = price[0:end_index]
    should_buy = calculate(eps, bvp, stock_price)
    stock = {
        "name": name,
        "price": price,
        "stock_price": stock_price,
        "eps": eps,
        "bvp": bvp,
        "should_buy": should_buy[0],
        "graham": should_buy[1],

    }
    print(stock)


def calculate(eps, bvp, stock_price):
    cal = 22.5 * float(eps) * float(bvp)
    if (cal > 0):
        sqr = math.sqrt(cal)
        return float(stock_price) < sqr, sqr
    else:
        positive = abs(cal)
        sqr = math.sqrt(positive)
        return float(stock_price) < -sqr, -sqr


top_stocks = ["AMZN", ]
# AMZN

get_most_active()
