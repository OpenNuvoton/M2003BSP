/**************************************************************************//**
 * @file     main.c
 * @version  V1.00
 * @brief    Demonstrate the usage of TIMER_Delay() API to generate a 1
 *           second delay.
 * SPDX-License-Identifier: Apache-2.0
 * @copyright (C) 2023 Nuvoton Technology Corp. All rights reserved.
 ******************************************************************************/

#include <stdio.h>
#include "NuMicro.h"

/*----------------------------------------------*/
/* Define global variables and constants        */
/*----------------------------------------------*/


void SYS_Init(void)
{
    /*------------------------------------------*/
    /* Init System Clock                        */
    /*------------------------------------------*/
    /* Unlock protected registers */
    SYS_UnlockReg();

    /* Enable Internal RC 24 MHz clock */
    CLK_EnableXtalRC(CLK_PWRCTL_HIRCEN_Msk);

    /* Wait for HIRC and HXT clock ready */
    CLK_WaitClockReady(CLK_STATUS_HIRCSTB_Msk);

    /* Switch HCLK clock source to Internal RC and HCLK source divide 1 */
    CLK_SetHCLK(CLK_CLKSEL0_HCLKSEL_HIRC, CLK_CLKDIV0_HCLK(1));

    /* Update System Core Clock */
    /* User can use SystemCoreClockUpdate() to calculate SystemCoreClock. */
    SystemCoreClockUpdate();

    /* Select UART clock source from HXT */
    CLK_SetModuleClock(UART0_MODULE, CLK_CLKSEL2_UART0SEL_HIRC, CLK_CLKDIV0_UART0(1));

    /* Enable UART clock */
    CLK_EnableModuleClock(UART0_MODULE);

    /* Enable TIMER peripheral clock */
    CLK_SetModuleClock(TMR0_MODULE, CLK_CLKSEL1_TMR0SEL_HIRC, 0);
    CLK_EnableModuleClock(TMR0_MODULE);

    /*----------------------------------*/
    /* Init I/O Multi-function          */
    /*----------------------------------*/
    /* Set GPB multi-function pins for UART0 RXD and TXD */
    SYS->GPB_MFPH = (SYS->GPB_MFPH & ~SYS_GPB_MFPH_PB12MFP_Msk) | SYS_GPB_MFPH_PB12MFP_UART0_RXD;
    SYS->GPB_MFPH = (SYS->GPB_MFPH & ~SYS_GPB_MFPH_PB13MFP_Msk) | SYS_GPB_MFPH_PB13MFP_UART0_TXD;

    /* Lock protected registers */
    SYS_LockReg();
}

void UART0_Init(void)
{
    /* Reset UART0 */
    SYS_ResetModule(UART0_RST);

    /* Configure UART0 and set UART0 baud rate */
    UART_Open(UART0, 115200);
}

void TIMER_FunctionTest()
{
    printf("This sample code use timer to create a small delay \n");
    while(1)
    {
        printf("Delay 1 second\n");
        TIMER_Delay(TIMER0, 1000000);
    }
}

int main()
{
    /* Init System, IP clock and multi-function I/O */
    SYS_Init();

    /* Init UART to print message */
    UART0_Init();

    printf("\nSystem clock rate: %d Hz\n", SystemCoreClock);

    /* TIMER function test */
    TIMER_FunctionTest();

    printf("Exit TIMER sample code\n");

    /* Got no where to go, just loop forever */
    while (1);
}

/*** (C) COPYRIGHT 2023 Nuvoton Technology Corp. ***/