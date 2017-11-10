Pseudo-Facebook User Data Case Study
-------------

Set up:

```{r}
# set current working directory
setwd('/Users/alexchen/achen/Projects/EDA/one_variable_analysis/')

# list all files in current directory
list.files()

# load csv file
pf <- read.csv('pseudo_facebook.tsv', sep = '\t')
```
<hr>


> Create a Histogram of Users' Birthdays

```{r}
library(ggplot2)

# ggplot: date of birth as x
ggplot(aes(x = dob_day), data = pf) +
  geom_histogram(binwidth = 0.5) +
  scale_x_continuous(breaks = 1:31)
```

<img class="col-xs-12" src="/assets/img/blogs/2017_11_9_one_variable/histogram_dob.png" alt="ggplot"/>
<center>Histogram of Users' Birthdays</center>
<hr>


> Create a Histogram of Users' Birthdays Faceting on date of birth by month

**Note:** 

Use facet_wrap(~variable) to categorize based on the variable input. 

Use facet_grid(vertical~horizontal) to categorize with two variables.

```{r}
ggplot(data = pf, aes(x = dob_day)) +
  geom_histogram(binwidth = 1) +
  scale_x_continuous(breaks = 1:31) +
  facet_wrap(~dob_month)
```

<img class="col-xs-12" src="/assets/img/blogs/2017_11_9_one_variable/facet_histogram_dob.png" alt="ggplot"/>
<center>Histogram of Users' Birthdays faceting on dob_month</center>
<hr>

> Create a histogram of friend counts with x upper bound of 1,000

```{r}
ggplot(data = pf, aes(x = friend_count)) +
  geom_histogram() +
  scale_x_continuous(limits = c(0, 1000))
```

<img class="col-xs-12" src="/assets/img/blogs/2017_11_9_one_variable/friend_count.png" alt="ggplot"/>
<center>Histogram of Friend Counts</center>
<hr>


We can **Omit** N/A Observations by using is.na(variable) or na.omit(data_table).

**is.na(variable)** will get rid of rows if the variable column consists an N/A.

**na.omit(data_table)** will get rid of rows if any column consists an N/A.


Statistics 'By' Gender
------

```{r}
by(pf$friend_count, pf$gender, summary)
```

In this case, Friend count is the variable, gender is the categorized variable, and summary is the function passed in to run.


Colours
------

```{r}
# Tenure
ggplot(aes(x = tenure), data = pf) +
  geom_histogram(binwidth = 30, color = 'black', fill = '#099DD9')
  
# Tenure by Year
ggplot(aes(x = tenure / 365), data = pf) +
  geom_histogram(color = 'black', fill = '#F79420') +
  scale_x_continuous(breaks = seq(1, 7, 1), limits = c(0, 7)) +
  xlab('Number of years using Facebook') +
  ylab('Number of users in sample')
```

<img class="col-xs-12" src="/assets/img/blogs/2017_11_9_one_variable/tenure.png" alt="ggplot"/>


The parameter `color` determines the color outline of objects in a plot.

The parameter `fill` determines the color of the area inside objects in a plot.


Transforming Data
-----

```{r}
# install package to plot 3 graph into one
install.packages('gridExtra')
library(gridExtra)

# normal friend count histogram
p1 <- ggplot(aes(x = friend_count), data = pf) + geom_histogram()

# normal distribution of friend count histogram
p2 <- p1 + scale_x_log10()

# squared root of friend count histogram
p3 <- p1 + scale_x_sqrt()

grid.arrange(p1, p2, p3, ncol = 1)
```

<img class="col-xs-12" src="/assets/img/blogs/2017_11_9_one_variable/transforming_data.png" alt="ggplot"/>






