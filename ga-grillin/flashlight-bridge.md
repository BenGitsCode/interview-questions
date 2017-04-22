**Q:**
Four people need to cross a rickety rope bridge to get back to their camp at night. Unfortunately they only have one flashlight and it only has enough light left for seventeen minutes . The bridge is too dangerous to cross without the flashlight ,and it's only strong enough to support two people at any given time . Each of the campers walk at different speed . One can cross the bridge in 1 minute ,another in 2 minutes , the third in 5 minutes and slowest one takes 10 minutes to cross . Show how they can make it in 17 minutes

**A**
1. 1 and 2 will cross=                                                          2min
2. 1 returns back = 2+1=                                                        3min
3. 1 now gives the light to 5 and 10 and they both cross= 3+10=                 13min
4. Now 2 takes the torch on the other side of the bridge and walks back 13+2 =  15min
5. 1 and 2 return back=15+2 =17min!!                                            17min


1    2, 1 =>          1, 2   2min
2-   <=1              2      3min
10    5, 10 =>         2,5,10 13min
5

1,2,5,10
    (F)12=>      1,2        2min
    (F)<=1       2         3min
    (F)=>5,10    2,5,10    13min
    (F)<=2                15min
    (F)1,2=>       1,2,5,10

Math solution:
For 4 of them to come to the other side of the bridge there will be 5 "walks"
required over the bridge(we will have to assume that every walk to the other side of the bridge would contain two people).

Lets put the time for each walk as A,B,C,D,E respectively.

And the time should sum up to 17 i.e.
A + B + C +D + E = 17.

Based on this we can have following scenarios(equations):
1) 5(A) = 17
     The above equation means that a single person(who is slowest) will be present in all the walks. In our case 10 being the slowest, the above equation will not hold good , 5(10) = 50 ≠ 17. So this scenario is ruled out.

2) A + 4(B) = 17.
      This tells that one person's time will be counted four times and the any other person's will be counted once.
Substituting values for A amongst 1,2,5,10 we will get the values 4,3.75,3,1.75 respectively which unfortunately is not amongst the given time list. Even this isbe ruled out.

3) A + B + 3(C) = 17
       This says one person's time will be counted three times and there will be other two whose time will be counted
Let A = 1 B = 2, then C = 4.6667 not good
A = 1 B = 5 , then C = 3.667 not good
A = 1 B = 10 then C = 2 possible
A = 2 B = 5 then C = 3.333  not good
A = 2 B = 10 then C = 2.333 not good

Similarly there will be couple more equations but they will not hold good.
like 2A + 3B = 17, 2A + 2B + C  = 17, A + B + C + 2D = 17.


So the equation A+B+3(C) = 17 holds good for values A = 1, B = 10,C = 2,
as 5 is not part of this, that means that person has to accompanied along with the slowest person i.e. 10. And C has to travel three time.

Based on this we can come up up with the arrangements as follows:
1) First 1 and 2 will cross the bridge in 2 mins.(2 has been counted once)
2) 1 will come back in 1 mins total = 3 mins. ( 1 has been counted once)
3) 5 and 10 will cross the bridge in 10 mins total = 13 mins (10 has been counted once)
4) 2 will go back in 2 mins total = 15 mins(2 has been counted twice)
5) 2 will bring back 1 in 2 mins total = 17 mins( 2 has been counted thrice)
