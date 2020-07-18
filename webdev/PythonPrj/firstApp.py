
import openpyxl
import win32com.client
xl=win32com.client.Dispatch("Excel.Application")
xl.Workbooks.Open(Filename="e:\\sample2_current20181214\\cp_sample2_current20181214.xlsm",UpdateLinks=0,ReadOnly=0)
xl.Application.Run("cp_sample2_current20181214.xlsm!Module1.writeAblock")
xl.Workbooks(1).Close(SaveChanges=0)
xl.Application.Quit()

del xl