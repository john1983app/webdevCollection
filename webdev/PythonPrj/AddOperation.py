#!/usr/bin/env python3

# -*- coding: utf-8 -*-



"""



In this code example, we create a

add operation widget.



author: Adolf



last modified: March 05 2019

"""



import wx





class Example(wx.Frame):



    def __init__(self, *args, **kw):

        super(Example, self).__init__(*args, **kw)



        self.InitUI()



    def InitUI(self):



        pnl = wx.Panel(self)

        closeButton = wx.Button(pnl, label='Close', pos=(200, 180))

        calcuButton = wx.Button(pnl, label='Calculate', pos=(20, 140))

        self.addedNum = wx.TextCtrl(pnl, value="1",pos=(20,60))

        self.adderNum = wx.TextCtrl(pnl, value="1",pos=(20,100))

        self.Result = wx.TextCtrl(pnl, value="",pos=(20,180))



       

        calcuButton.Bind(wx.EVT_BUTTON, self.CalcuResult)

        closeButton.Bind(wx.EVT_BUTTON, self.OnClose)



        self.SetSize((350, 250))

        self.SetTitle('Add operation')

        self.Centre()

    def CalcuResult(self, e):

        calResult = int(self.addedNum.GetLineText(0))+int(self.adderNum.GetLineText(0))

        self.Result.write(str(calResult))

       

    def OnClose(self, e):



        self.Close(True)





def main():



    app = wx.App()

    ex = Example(None)

    ex.Show()

    app.MainLoop()





if __name__ == '__main__':

    main() 